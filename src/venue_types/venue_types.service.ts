import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { InjectModel } from "@nestjs/mongoose";
import { VenueType } from "./schema/venue_type.schema";
import { Model, Types } from "mongoose";
import { VenueService } from "../venue/venue.service";
import { TypesService } from "../types/types.service";

@Injectable()
export class VenueTypesService {
  constructor(
    @InjectModel(VenueType.name)
    private readonly venueTypeModel: Model<VenueType>,
    private readonly venueService: VenueService,
    private readonly typesService: TypesService
  ) {}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    const { type_id, venue_id } = createVenueTypeDto;
    if (!type_id || !venue_id) {
      throw new Error("Type ID and Venue ID are required");
    }
    const type = this.typesService.findOne(type_id.toString());
    if (!type) {
      throw new Error("Type not found");
    }
    const venue = this.venueService.findOne(venue_id.toString());
    if (!venue) {
      throw new Error("Venue not found");
    }
    const venueType = this.venueTypeModel.create(createVenueTypeDto);
    return venueType;
  }
  findAll() {
    return this.venueTypeModel.find().populate("type_id").populate("venue_id");
  }

  findOne(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.venueTypeModel.findById(id);
  }

  update(id: string, updateVenueTypeDto: UpdateVenueTypeDto) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.venueTypeModel.updateOne({ _id: id }, updateVenueTypeDto);
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.venueTypeModel.deleteOne({ _id: id });
  }
}
