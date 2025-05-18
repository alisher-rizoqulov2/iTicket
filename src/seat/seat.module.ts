import { Module } from '@nestjs/common';
import { SeatService } from './seat.service';
import { SeatController } from './seat.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Seat, SeatSchema } from './schema/seat.schema';
import { VenueModule } from '../venue/venue.module';
import { SeatTypeModule } from '../seat_type/seat_type.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Seat.name, schema: SeatSchema}]),VenueModule,SeatTypeModule],
  controllers: [SeatController],
  providers: [SeatService],
  exports: [SeatService]
})
export class SeatModule {}
