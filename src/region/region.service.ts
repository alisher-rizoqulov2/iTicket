import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateRegionDto } from "./dto/create-region.dto";
import { UpdateRegionDto } from "./dto/update-region.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Region } from "./schemas/region.schema";
import { Model, Types } from "mongoose";

@Injectable()
export class RegionService {
  constructor(
    @InjectModel(Region.name) private readonly regionSchema: Model<Region>
  ) {}
  create(createRegionDto: CreateRegionDto) {
    return this.regionSchema.create(createRegionDto);
  }

  findAll() {
    return this.regionSchema.find().populate("districts");
  }

  findOne(_id: string) {
      if (!Types.ObjectId.isValid(_id))
          throw new NotFoundException("Invalid ID format");
    return this.regionSchema.findById(_id);
  }

  update(_id: string, updateRegionDto: UpdateRegionDto) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.regionSchema.updateOne({ _id }, updateRegionDto);
  }

  remove(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.regionSchema.deleteOne({ _id });
  }
}
