import { Module } from "@nestjs/common";
import { LangService } from "./lang.service";
import { LangController } from "./lang.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { LangSchema } from "./schema/lang.schema";
import { EventModule } from "../event/event.module";
import { TicketModule } from "../ticket/ticket.module";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Lang", schema: LangSchema }]),EventModule,TicketModule],
  controllers: [LangController],
  providers: [LangService],
})
export class LangModule {}
