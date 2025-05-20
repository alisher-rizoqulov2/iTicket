import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { Venue } from "../../venue/schema/venue.schema";
import { HumanCategory } from "../../human_category/schema/human_category.schema";
import { EventType } from "../../event_type/schema/event_type.schema";
import { Lang } from "../../lang/schema/lang.schema";

export type EventDocument = HydratedDocument<Event>;

@Schema()
export class Event {
  @Prop()
  name: string;

  @Prop()
  photo: string;

  @Prop()
  start_date: Date;

  @Prop()
  start_time: Date;

  @Prop()
  end_date: Date;

  @Prop()
  end_time: Date;

  @Prop()
  info: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "EventType",
  })
  event_type_id: EventType;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "HumanCategory",
  })
  human_category_id: HumanCategory;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
  })
  venue_id: Venue;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lang",
  })
  lang_id: Lang;

  @Prop()
  relese_date: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
