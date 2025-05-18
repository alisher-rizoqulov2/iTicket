import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class SeatType {
  @Prop({ required: true })
  name: string;
}
export const SeatTypeSchema = SchemaFactory.createForClass(SeatType);