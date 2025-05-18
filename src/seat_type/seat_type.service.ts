import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSeatTypeDto } from './dto/create-seat_type.dto';
import { UpdateSeatTypeDto } from './dto/update-seat_type.dto';
import { InjectModel } from '@nestjs/mongoose';
import { SeatType } from './schema/seat_type.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class SeatTypeService {
  constructor(
    @InjectModel(SeatType.name) private readonly seatTypeSchema: Model<SeatType>
  ) {}
  create(createSeatTypeDto: CreateSeatTypeDto) {
    return this.seatTypeSchema.create(createSeatTypeDto);
  }

  findAll() {
    return this.seatTypeSchema.find();
  }

  findOne(_id: string) {
     if (!Types.ObjectId.isValid(_id))
          throw new NotFoundException("Invalid ID format");
    return this.seatTypeSchema.findById(_id);
  }

  update(_id: string, updateSeatTypeDto: UpdateSeatTypeDto) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.seatTypeSchema.updateOne({ _id }, updateSeatTypeDto);
  }

  remove(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.seatTypeSchema.deleteOne({ _id });
  }
}
