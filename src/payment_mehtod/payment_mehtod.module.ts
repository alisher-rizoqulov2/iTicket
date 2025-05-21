import { Module } from '@nestjs/common';
import { PaymentMehtodService } from './payment_mehtod.service';
import { PaymentMehtodController } from './payment_mehtod.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { PaymentMehtodSchema } from './schemas/payment_mehtod.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'PaymentMehtod',
        schema: PaymentMehtodSchema,
      },
    ])
  ],
  controllers: [PaymentMehtodController],
  providers: [PaymentMehtodService],
})
export class PaymentMehtodModule {}
