import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Types } from "mongoose";
import { Region } from "../../region/schemas/region.schema";
import { Customer } from "../../customer/schemas/customer.schema";

export type CustomerCardDocument = HydratedDocument<CustomerCard>;

@Schema()
export class CustomerCard {
  @Prop({type:mongoose.Schema.Types.ObjectId, ref:"Customer"})
  customer_id:Customer

  @Prop()
  name: string

  @Prop()
  phone_number: string

  @Prop()
  number: string

  @Prop()
  year: string

  @Prop()
  month: string

  @Prop()
  is_active: boolean

  @Prop()
  is_main: boolean
}

export const CustomerCardSchema = SchemaFactory.createForClass(CustomerCard);