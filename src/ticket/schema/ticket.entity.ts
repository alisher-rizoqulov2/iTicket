import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { TicketStatus } from "../../ticket_status/schema/ticket_status.schema";
import { Seat } from "../../seat/schema/seat.schema";
import { Event } from "../../event/schema/event.schema";

export type TicketDocument = HydratedDocument<Ticket>;

@Schema()
export class Ticket {
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
  })
  event_id: Event

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seat",
  })
  seat_id: Seat

  @Prop()
  price: number;

  @Prop()
  service_fee: number;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: "TicketStatus",
  })
  status_id: TicketStatus;

  @Prop()
  ticket_type: number;
}

export const TicketSchema = SchemaFactory.createForClass(Ticket);
