import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { AdminModule } from "./admin/admin.module";
import { AuthModule } from "./auth/auth.module";
import { CustomerModule } from "./customer/customer.module";
import { RegionModule } from "./region/region.module";
import { DistrictModule } from "./district/district.module";
import { CustomerAddress } from "./customet-address/schemas/customet-address.schema";
import { CustometCardModule } from "./customet-card/customet-card.module";
import { CustometAddressModule } from "./customet-address/customet-address.module";
import { VenueModule } from './venue/venue.module';
import { TypesModule } from './types/types.module';
import { SeatTypeModule } from './seat_type/seat_type.module';
import { VenuePhotoModule } from './venue_photo/venue_photo.module';
import { VenueTypesModule } from './venue_types/venue_types.module';
import { SeatModule } from './seat/seat.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    AdminModule,
    AuthModule,
    CustomerModule,
    RegionModule,
    DistrictModule,
    CustometCardModule,
    CustometAddressModule,
    VenueModule,
    TypesModule,
    SeatTypeModule,
    VenuePhotoModule,
    VenueTypesModule,
    SeatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
