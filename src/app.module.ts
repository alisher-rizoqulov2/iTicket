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
import { VenueModule } from "./venue/venue.module";
import { TypesModule } from "./types/types.module";
import { SeatTypeModule } from "./seat_type/seat_type.module";
import { VenuePhotoModule } from "./venue_photo/venue_photo.module";
import { VenueTypesModule } from "./venue_types/venue_types.module";
import { SeatModule } from "./seat/seat.module";
import { LangModule } from "./lang/lang.module";
import { HumanCategoryModule } from "./human_category/human_category.module";
import { EventTypeModule } from "./event_type/event_type.module";
import { TicketStatusModule } from "./ticket_status/ticket_status.module";
import { EventModule } from "./event/event.module";
import { TicketModule } from "./ticket/ticket.module";
import { PaymentMehtodModule } from "./payment_mehtod/payment_mehtod.module";
import { DeliveryMehtodModule } from "./delivery_mehtod/delivery_mehtod.module";
import { CardItemModule } from "./card_item/card_item.module";
import { CardModule } from "./card/card.module";
import { BookingModule } from "./booking/booking.module";

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
    LangModule,
    HumanCategoryModule,
    EventTypeModule,
    TicketStatusModule,
    EventModule,
    TicketModule,
    PaymentMehtodModule,
    DeliveryMehtodModule,
    CardItemModule,
    CardModule,
    BookingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
