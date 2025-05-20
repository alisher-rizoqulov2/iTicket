import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Event } from "./schema/event.schema";

@Injectable()
export class EventService {
  constructor(
    @InjectModel("Event") private readonly eventModel: Model<Event>
  ) {}
  create(createEventDto: CreateEventDto) {
    return this.eventModel.create(createEventDto);
  }

  findAll() {
    return this.eventModel.find();
  }

  findOne(id: number) {
    return this.eventModel.findById(id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventModel.findByIdAndUpdate(id, updateEventDto);
  }

  remove(id: number) {
    return this.eventModel.findByIdAndDelete(id);
  }
}
