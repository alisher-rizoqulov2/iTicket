import { Module } from '@nestjs/common';
import { DeliveryMehtodService } from './delivery_mehtod.service';
import { DeliveryMehtodController } from './delivery_mehtod.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { DeliveryMehtodSchema } from './schemas/delivery_mehtod.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'DeliveryMehtod',
        schema: DeliveryMehtodSchema,
      },
    ])
  ],
  controllers: [DeliveryMehtodController],
  providers: [DeliveryMehtodService],
})
export class DeliveryMehtodModule {}
