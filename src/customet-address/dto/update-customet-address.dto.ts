import { PartialType } from '@nestjs/mapped-types';
import { CreateCustometAddressDto } from './create-customet-address.dto';

export class UpdateCustometAddressDto extends PartialType(CreateCustometAddressDto) {}
