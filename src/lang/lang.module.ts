import { Module } from "@nestjs/common";
import { LangService } from "./lang.service";
import { LangController } from "./lang.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { LangSchema } from "./schema/lang.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: "Lang", schema: LangSchema }])],
  controllers: [LangController],
  providers: [LangService],
})
export class LangModule {}
