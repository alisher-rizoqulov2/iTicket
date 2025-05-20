import mongoose from "mongoose";

export class CreateEventTypeDto {
  name: string;

  parent_event_type_id: mongoose.Types.ObjectId;
}
