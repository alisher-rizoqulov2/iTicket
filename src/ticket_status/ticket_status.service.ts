import { Injectable } from "@nestjs/common";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { TicketStatus } from "./schema/ticket_status.schema";

@Injectable()
export class TicketStatusService {
  constructor(
    @InjectModel("TicketStatus")
    private readonly ticketStatusModel: Model<TicketStatus>
  ) {}

  create(createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusModel.create(createTicketStatusDto);
  }

  findAll() {
    return this.ticketStatusModel.find();
  }

  findOne(id: number) {
    return this.ticketStatusModel.findById(id);
  }

  update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    return this.ticketStatusModel.findByIdAndUpdate(id, updateTicketStatusDto);
  }

  remove(id: number) {
    return this.ticketStatusModel.deleteOne({ _id: id });
  }
}
