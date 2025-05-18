import { IsNotEmpty } from "class-validator";
import mongoose from "mongoose";

export class CreateVenueTypeDto {
  @IsNotEmpty()
  type_id: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty()
  venue_id: mongoose.Schema.Types.ObjectId;
}
