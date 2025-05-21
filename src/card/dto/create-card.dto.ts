import { Types } from "mongoose";

export class CreateCardDto {
  customer_id: number;
  number: string;
  year: string;
  createdAt: Date;
  finishAt: Date;
  status_id: Types.ObjectId;
}
