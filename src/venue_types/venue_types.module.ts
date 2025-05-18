import { Module } from '@nestjs/common';
import { VenueTypesService } from './venue_types.service';
import { VenueTypesController } from './venue_types.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { VenueTypeSchema } from './schema/venue_type.schema';
import { VenueModule } from '../venue/venue.module';
import { TypesModule } from '../types/types.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'VenueType', schema: VenueTypeSchema }]),VenueModule,TypesModule],
  controllers: [VenueTypesController],
  providers: [VenueTypesService],
  exports: [VenueTypesService],
})
export class VenueTypesModule {}
