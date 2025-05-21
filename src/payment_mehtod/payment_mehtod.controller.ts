import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PaymentMehtodService } from './payment_mehtod.service';
import { CreatePaymentMehtodDto } from './dto/create-payment_mehtod.dto';
import { UpdatePaymentMehtodDto } from './dto/update-payment_mehtod.dto';

@Controller('payment-mehtod')
export class PaymentMehtodController {
  constructor(private readonly paymentMehtodService: PaymentMehtodService) {}

  @Post()
  create(@Body() createPaymentMehtodDto: CreatePaymentMehtodDto) {
    return this.paymentMehtodService.create(createPaymentMehtodDto);
  }

  @Get()
  findAll() {
    return this.paymentMehtodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMehtodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentMehtodDto: UpdatePaymentMehtodDto) {
    return this.paymentMehtodService.update(+id, updatePaymentMehtodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentMehtodService.remove(+id);
  }
}
