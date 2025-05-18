import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Venue } from "./schema/venue.schema";
import { Model, Types } from "mongoose";
import { DistrictService } from "../district/district.service";
import { RegionService } from "../region/region.service";

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue.name) private readonly venueModel: Model<Venue>,
    private readonly districtService: DistrictService,
    private readonly regionService: RegionService
  ) {}

  create(createVenueDto: CreateVenueDto) {
    const { district_id, region_id } = createVenueDto;
    if (!district_id || !region_id) {
      throw new Error("District ID and Region ID are required");
    }
    const district = this.districtService.findOne(district_id.toString());
    if (!district) {
      throw new Error("District not found");
    }
    const region = this.regionService.findOne(region_id.toString());

    if (!region) {
      throw new Error("Region not found");
    }
    const venue = this.venueModel.create(createVenueDto);
    return venue;
  }

  findAll() {
    return this.venueModel.find().populate("region_id").populate("district_id");
  }

  findOne(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.venueModel.findById(id);
  }

  update(id: string, updateVenueDto: UpdateVenueDto) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.venueModel.updateOne({ _id: id }, updateVenueDto);
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.venueModel.deleteOne({ _id: id });
  }
}
