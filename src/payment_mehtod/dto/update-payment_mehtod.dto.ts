import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentMehtodDto } from './create-payment_mehtod.dto';

export class UpdatePaymentMehtodDto extends PartialType(CreatePaymentMehtodDto) {}
