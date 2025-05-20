import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Ticket } from "./schema/ticket.entity";

@Injectable()
export class TicketService {
  constructor(
    @InjectModel("Ticket") private readonly ticketModel: Model<Ticket>
  ) {}
  create(createTicketDto: CreateTicketDto) {
    return this.ticketModel.create(createTicketDto);
  }

  findAll() {
    return this.ticketModel.find();
  }

  findOne(id: number) {
    return this.ticketModel.findById(id);
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return this.ticketModel.findByIdAndUpdate(id, updateTicketDto);
  }

  remove(id: number) {
    return this.ticketModel.findByIdAndDelete(id);
  }
}
