import { Module } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { MongooseModule } from "@nestjs/mongoose";
import { TicketSchema } from "./schema/ticket.entity";
import { SeatTypeModule } from "../seat_type/seat_type.module";
import { TicketController } from "./ticket.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Ticket", schema: TicketSchema }]),
    SeatTypeModule,
  ],

  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
