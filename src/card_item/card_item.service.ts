import { Injectable } from '@nestjs/common';
import { CreateCardItemDto } from './dto/create-card_item.dto';
import { UpdateCardItemDto } from './dto/update-card_item.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CardItem } from './schemas/card_item.schema';

@Injectable()
export class CardItemService {
  constructor(
    @InjectModel('CardItem') private readonly cardItemModel: Model<CardItem>,
  ) {}

  create(createCardItemDto: CreateCardItemDto) {
    return this.cardItemModel.create(createCardItemDto);
  }

  findAll() {
    return this.cardItemModel.find();
  }

  findOne(id: number) {
    return this.cardItemModel.findById(id);
  }

  update(id: number, updateCardItemDto: UpdateCardItemDto) {
    return this.cardItemModel.updateOne({ _id: id }, updateCardItemDto);
  }

  remove(id: number) {
    return this.cardItemModel.deleteOne({ _id: id });
  }
}
