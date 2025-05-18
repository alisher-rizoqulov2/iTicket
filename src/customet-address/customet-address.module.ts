import { Module } from '@nestjs/common';
import { CustometAddressService } from './customet-address.service';
import { CustometAddressController } from './customet-address.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomerAddressSchema } from './schemas/customet-address.schema';
import { CustomerSchema } from '../customer/schemas/customer.schema';
import { RegionModule } from '../region/region.module';
import { DistrictModule } from '../district/district.module';
import { CustomerModule } from '../customer/customer.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'CustomerAddress',
        schema: CustomerAddressSchema,
      },
      {
        name: 'Customer',
        schema: CustomerSchema,
      }
    ]),
    RegionModule,
    DistrictModule,
    CustomerModule
  ],
  controllers: [CustometAddressController],
  providers: [CustometAddressService],
  exports:[CustometAddressService]
})
export class CustometAddressModule {}
