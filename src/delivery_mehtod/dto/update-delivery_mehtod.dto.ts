import { PartialType } from '@nestjs/mapped-types';
import { CreateDeliveryMehtodDto } from './create-delivery_mehtod.dto';

export class UpdateDeliveryMehtodDto extends PartialType(CreateDeliveryMehtodDto) {}
