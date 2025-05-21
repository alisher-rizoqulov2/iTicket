import { Injectable } from '@nestjs/common';
import { CreatePaymentMehtodDto } from './dto/create-payment_mehtod.dto';
import { UpdatePaymentMehtodDto } from './dto/update-payment_mehtod.dto';

@Injectable()
export class PaymentMehtodService {
  create(createPaymentMehtodDto: CreatePaymentMehtodDto) {
    return 'This action adds a new paymentMehtod';
  }

  findAll() {
    return `This action returns all paymentMehtod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paymentMehtod`;
  }

  update(id: number, updatePaymentMehtodDto: UpdatePaymentMehtodDto) {
    return `This action updates a #${id} paymentMehtod`;
  }

  remove(id: number) {
    return `This action removes a #${id} paymentMehtod`;
  }
}
