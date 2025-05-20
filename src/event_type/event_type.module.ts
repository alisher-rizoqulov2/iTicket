import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EventTypeSchema } from './schema/event_type.schema';
import { EventService } from '../event/event.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "EventType", schema: EventTypeSchema }]),
  ],
  controllers: [EventTypeController],
  providers: [EventTypeService],
  exports:[EventTypeService]
})
export class EventTypeModule {}
