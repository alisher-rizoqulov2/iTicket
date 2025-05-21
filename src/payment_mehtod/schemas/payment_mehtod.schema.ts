import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PaymentMehtodDocument = HydratedDocument<PaymentMehtod>

@Schema()
export class PaymentMehtod {
    @Prop()
    name: string
}

export const PaymentMehtodSchema = SchemaFactory.createForClass(PaymentMehtod);