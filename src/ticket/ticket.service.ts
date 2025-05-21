import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Ticket } from "./schema/ticket.entity";
import { SeatTypeService } from "../seat_type/seat_type.service";

@Injectable()
export class TicketService {
  constructor(
    @InjectModel("Ticket") private readonly ticketModel: Model<Ticket>,
    private readonly seatTypeService: SeatTypeService
  ) {}
  create(createTicketDto: CreateTicketDto) {
    return this.ticketModel.create(createTicketDto);
  }

  async findAll() {
    // const seat = await this.ticketModel.find().populate("seat_id");
    // const id = seat[1].seat_id.seat_type_id;
    // const seattype = await this.seatTypeService.findOne(id.toString());
    // console.log(seattype);
    return this.ticketModel
      .find({})
      .populate("event_id")
      .populate("status_id")
      .populate({
        path: "seat_id",
        populate: {
          path: "seat_type_id",
        },
      });
  }
  

  findOne(id: number) {
    return this.ticketModel.findById(id);
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketModel.findByIdAndUpdate(id, updateTicketDto);
  }

  remove(id: number) {
    return this.ticketModel.findByIdAndDelete(id);
  }
}
