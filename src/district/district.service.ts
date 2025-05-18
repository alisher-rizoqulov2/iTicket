import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { District } from "./schemas/district.schema";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model, Types } from "mongoose";
import { Region } from "../region/schemas/region.schema";

@Injectable()
export class DistrictService {
  constructor(
    @InjectModel(District.name) private readonly districtModel: Model<District>,
    @InjectModel(Region.name) private readonly RegionModel: Model<Region>
  ) {}

  async create(createDistrictDto: CreateDistrictDto) {
    const { region_id } = createDistrictDto;
    if(!mongoose.isValidObjectId(region_id)) {
      throw new BadRequestException("Region ID notog'ri");
    }
    
    const region = await this.RegionModel.findById(region_id);
    if (!region) {
      throw new BadRequestException("Bunday Region yo'q");
    }
    const district = await this.districtModel.create(createDistrictDto);
    region.districts.push(district);
    await region.save();
    return district;
  }

  findAll() {
    return this.districtModel.find().populate("region_id");
  }

  findOne(id: string) {
      if (!Types.ObjectId.isValid(id))
          throw new NotFoundException("Invalid ID format");
    return this.districtModel.findById(id);
  }

  update(id: string, updateDistrictDto: UpdateDistrictDto) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.districtModel.updateOne({ _id: id }, updateDistrictDto);
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.districtModel.deleteOne({ _id: id });
  }
}
