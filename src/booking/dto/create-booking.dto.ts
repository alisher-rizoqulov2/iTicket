import { Types } from "mongoose";

export class CreateBookingDto {
  card_id: Types.ObjectId;
  createdAt: Date;
  finishAt: Date;
  payment_method_id: Types.ObjectId;
  delivery_method_id: Types.ObjectId;
  address_id: number;
  discount_coupon_id: number;
  status_id: number;
}
