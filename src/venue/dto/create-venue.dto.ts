import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateVenueDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  address: string;
  @IsNotEmpty()
  location: string;
  @IsNotEmpty()
  site: string;
  @IsNotEmpty()
  phone_number: string;
  @IsNotEmpty()
  schema: string;
  @IsNotEmpty()
  region_id: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty()
  district_id: mongoose.Schema.Types.ObjectId;
}
