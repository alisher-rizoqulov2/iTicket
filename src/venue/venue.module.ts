import { Module } from "@nestjs/common";
import { VenueService } from "./venue.service";
import { VenueController } from "./venue.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { VenueSchema } from "./schema/venue.schema";
import { DistrictModule } from "../district/district.module";
import { RegionModule } from "../region/region.module";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Venue", schema: VenueSchema }]),
    DistrictModule,
    RegionModule,
  ],
  controllers: [VenueController],
  providers: [VenueService],
  exports:[VenueService]
})
export class VenueModule {}
