import mongoose, { Types } from "mongoose";

export class CreateEventDto {
  name: string;
  photo: string;
  start_date: Date;
  start_time: Date;
  end_date: Date;
  end_time: Date;
  info: string;
  event_type_id: mongoose.Schema.Types.ObjectId;
  human_category_id: mongoose.Schema.Types.ObjectId;
  venue_id: mongoose.Schema.Types.ObjectId;
  lang_id: mongoose.Schema.Types.ObjectId;
  relese_date: Date;
}
