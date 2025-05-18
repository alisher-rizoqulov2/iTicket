import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerCardDto } from './create-customet-card.dto';

export class UpdateCustometCardDto extends PartialType(CreateCustomerCardDto) {}
