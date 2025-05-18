import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { Seat } from "./schema/seat.schema";
import { VenueService } from "../venue/venue.service";
import { SeatTypeService } from "../seat_type/seat_type.service";
import  { Model, Types } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable() 
export class SeatService {
  constructor(
    @InjectModel(Seat.name) private readonly seatModel: Model<Seat>,
    private readonly venueService: VenueService,
    private readonly seatTypeService: SeatTypeService
  ) {}
  create(createSeatDto: CreateSeatDto) {
    const { venue_id, seat_type_id } = createSeatDto;
    if (!venue_id || !seat_type_id) {
      throw new Error("Venue ID and Seat Type ID are required");
    }
    const venue = this.venueService.findOne(venue_id.toString());
    if (!venue) {
      throw new Error("Venue not found");
    }
    const seatType = this.seatTypeService.findOne(seat_type_id.toString());
    if (!seatType) {
      throw new Error("Seat Type not found");
    }
    const seat = this.seatModel.create(createSeatDto);
    return seat;
  }

  findAll() {
    return this.seatModel.find().populate("venue_id").populate("seat_type_id");
  }

  findOne(id: number) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.seatModel.findById(id);
  }

  update(id: number, updateSeatDto: UpdateSeatDto) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.seatModel.updateOne({ _id: id }, updateSeatDto);
  }

  remove(id: number) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.seatModel.deleteOne({ _id: id });
  }
}
