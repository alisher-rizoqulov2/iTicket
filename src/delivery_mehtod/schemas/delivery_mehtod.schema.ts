import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type DeliveryMehtodDocument = HydratedDocument<DeliveryMehtod>;

@Schema()
export class DeliveryMehtod {
    @Prop()
    name: string
}

export const DeliveryMehtodSchema = SchemaFactory.createForClass(DeliveryMehtod);