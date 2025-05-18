import { Module } from "@nestjs/common";
import { DistrictService } from "./district.service";
import { DistrictController } from "./district.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { DistrictSchema } from "./schemas/district.schema";
import { Region, RegionSchema } from "../region/schemas/region.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: "District", schema: DistrictSchema },
      { name: "Region", schema: RegionSchema },
    ]),
  ],
  controllers: [DistrictController],
  providers: [DistrictService],
  exports: [DistrictService],
})
export class DistrictModule {}
  