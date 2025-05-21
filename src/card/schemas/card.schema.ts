import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import mongoose, { HydratedDocument, Types } from "mongoose"

export type CardDocument = HydratedDocument<Card>

@Schema()
export class Card {
    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Customer"
    })
    customer_id:Types.ObjectId

    @Prop()
    number:string

    @Prop()
    year:string

    @Prop()
    createdAt:Date

    @Prop()
    finishAt:Date

    @Prop()
    status_id:number
}

export const CardSchema = SchemaFactory.createForClass(Card)