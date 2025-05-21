import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { HydratedDocument, Types } from "mongoose"

export type BookingDocument = HydratedDocument<Booking>

@Schema()
export class Booking {
    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card"
    })
    card_id:Types.ObjectId

    @Prop()
    createdAt:Date

    @Prop()
    finishAt:Date

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"PaymentMethod"
    })
    payment_method_id:Types.ObjectId

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"DeliveryMethod"
    })
    delivery_method_id:Types.ObjectId

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    })
    address_id:number

    @Prop()
    discount_coupon_id:number

    @Prop()
    status_id:number
}

export const BookingSchema = SchemaFactory.createForClass(Booking)