import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";

export type CardItemDocument = HydratedDocument<CardItem>;

@Schema()
export class CardItem {
    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Ticket"
    })
    ticket_id:Types.ObjectId

    @Prop({
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card"
    })
    card_id:Types.ObjectId
}

export const CardItemSchema = SchemaFactory.createForClass(CardItem);