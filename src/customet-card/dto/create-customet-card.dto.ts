import { IsMongoId, IsString, IsNumber, IsOptional } from "class-validator";
import mongoose, { Types } from "mongoose";

export class CreateCustomerCardDto {
  customer_id:mongoose.Schema.Types.ObjectId;

  name: string;

  phone_number: string;

  number: string;

  year: string;

  month: string;

  is_active: boolean;

  is_main: boolean;
}
