import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeliveryMehtodService } from './delivery_mehtod.service';
import { CreateDeliveryMehtodDto } from './dto/create-delivery_mehtod.dto';
import { UpdateDeliveryMehtodDto } from './dto/update-delivery_mehtod.dto';

@Controller('delivery-mehtod')
export class DeliveryMehtodController {
  constructor(private readonly deliveryMehtodService: DeliveryMehtodService) {}

  @Post()
  create(@Body() createDeliveryMehtodDto: CreateDeliveryMehtodDto) {
    return this.deliveryMehtodService.create(createDeliveryMehtodDto);
  }

  @Get()
  findAll() {
    return this.deliveryMehtodService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliveryMehtodService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliveryMehtodDto: UpdateDeliveryMehtodDto) {
    return this.deliveryMehtodService.update(+id, updateDeliveryMehtodDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliveryMehtodService.remove(+id);
  }
}
