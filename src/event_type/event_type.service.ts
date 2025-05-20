import { Injectable } from "@nestjs/common";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { EventType } from "./schema/event_type.schema";

@Injectable()
export class EventTypeService {
  constructor(
    @InjectModel("EventType") private readonly eventTypeModel: Model<EventType>
  ) {}
  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeModel.create(createEventTypeDto);
  }

  findAll() {
    return this.eventTypeModel.find();
  }

  findOne(id: number) {
    return this.eventTypeModel.findById(id);
  }

  update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeModel.findByIdAndUpdate(id, updateEventTypeDto);
  }

  remove(id: number) {
    return this.eventTypeModel.findByIdAndDelete(id);
  }
}
