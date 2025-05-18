import {  IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateVenuePhotoDto {
  @IsNotEmpty()
  venue_id: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty()
  url: string;
}
