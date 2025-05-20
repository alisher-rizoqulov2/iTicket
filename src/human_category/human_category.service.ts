import { Injectable } from "@nestjs/common";
import { CreateHumanCategoryDto } from "./dto/create-human_category.dto";
import { UpdateHumanCategoryDto } from "./dto/update-human_category.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { HumanCategory } from "./schema/human_category.schema";

@Injectable()
export class HumanCategoryService {
  constructor(
    @InjectModel("HumanCategory")
    private readonly humanCategoryModel: Model<HumanCategory>
  ) {}

  create(createHumanCategoryDto: CreateHumanCategoryDto) {
    return this.humanCategoryModel.create(createHumanCategoryDto);
  }

  findAll() {
    return this.humanCategoryModel.find();
  }

  findOne(id: number) {
    return this.humanCategoryModel.findById(id);
  }

  update(id: number, updateHumanCategoryDto: UpdateHumanCategoryDto) {
    return this.humanCategoryModel.updateOne(
      { _id: id },
      updateHumanCategoryDto
    );
  }

  remove(id: number) {
    return this.humanCategoryModel.deleteOne({ _id: id });
  }
}
