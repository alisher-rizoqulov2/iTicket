import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/mongoose";
import { VenuePhoto } from "./schema/venue_photo.schema";
import { Model, Types } from "mongoose";
import { VenueService } from "../venue/venue.service";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto.name)
    private readonly venuePhotoRepository: Model<VenuePhoto>,
    private readonly venueService: VenueService
  ) {}
  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    const { venue_id } = createVenuePhotoDto;
    if (!venue_id) {
      throw new Error("Venue ID is required");
    }
    const venue = this.venueService.findOne(venue_id.toString());
    if (!venue) {
      throw new Error("Venue not found");
    }
    
    return this.venuePhotoRepository.create(createVenuePhotoDto);
  }

  findAll() {
    return this.venuePhotoRepository.find().populate("venue_id");
  }

  findOne(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }
    return this.venuePhotoRepository.findById(id).populate("venue_id");
  }

  update(id: string, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }
    return this.venuePhotoRepository.updateOne(
      { _id: id },
      updateVenuePhotoDto
    );
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id)) {
      throw new Error("Invalid ID format");
    }
    return this.venuePhotoRepository.deleteOne({ _id: id });
  }
}
