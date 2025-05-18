import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTypeDto } from "./dto/create-type.dto";
import { UpdateTypeDto } from "./dto/update-type.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { Type } from "./schema/type.schema";

@Injectable()
export class TypesService {
  constructor(
    @InjectModel(Type.name) private readonly typesSchema: Model<Type>
  ) {}
  create(createTypeDto: CreateTypeDto) {
    return this.typesSchema.create(createTypeDto);
  }

  findAll() {
    return this.typesSchema.find();
  }

  findOne(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.typesSchema.findById(_id);
  }

  update(_id: string, updateTypeDto: UpdateTypeDto) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.typesSchema.updateOne({ _id }, updateTypeDto);
  }

  remove(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.typesSchema.deleteOne({ _id });
  }
}
