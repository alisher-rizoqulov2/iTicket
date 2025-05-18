import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenuePhoto, VenuePhotoSchema } from './schema/venue_photo.schema';
import { VenueModule } from '../venue/venue.module';

@Module({
  imports:[MongooseModule.forFeature([{name:"VenuePhoto",schema:VenuePhotoSchema}]),VenueModule],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
  exports:[VenuePhotoService]
})
export class VenuePhotoModule {}
