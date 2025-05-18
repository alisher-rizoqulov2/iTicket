import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type AdminDocument = HydratedDocument<Customer>;

@Schema()
export class Customer {
  @Prop()
  first_name: string;
  @Prop()
  last_name: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  phone_number: string;
  @Prop()
  hashed_password: string;
  @Prop()
  hashed_refresh_token: string;
  @Prop()
  birth_date: Date;
  @Prop({ required: true, enum: ["erkak", "ayol"] })
  gender: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
