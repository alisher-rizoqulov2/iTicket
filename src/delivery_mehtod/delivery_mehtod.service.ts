import { Injectable } from '@nestjs/common';
import { CreateDeliveryMehtodDto } from './dto/create-delivery_mehtod.dto';
import { UpdateDeliveryMehtodDto } from './dto/update-delivery_mehtod.dto';

@Injectable()
export class DeliveryMehtodService {
  create(createDeliveryMehtodDto: CreateDeliveryMehtodDto) {
    return 'This action adds a new deliveryMehtod';
  }

  findAll() {
    return `This action returns all deliveryMehtod`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deliveryMehtod`;
  }

  update(id: number, updateDeliveryMehtodDto: UpdateDeliveryMehtodDto) {
    return `This action updates a #${id} deliveryMehtod`;
  }

  remove(id: number) {
    return `This action removes a #${id} deliveryMehtod`;
  }
}
