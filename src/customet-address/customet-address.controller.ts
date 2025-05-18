import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustometAddressService } from "./customet-address.service";
import { CreateCustometAddressDto } from "./dto/create-customet-address.dto";
import { UpdateCustometAddressDto } from "./dto/update-customet-address.dto";

@Controller("customet-address")
export class CustometAddressController {
  constructor(
    private readonly custometAddressService: CustometAddressService
  ) {}

  @Post()
  create(@Body() createCustometAddressDto: CreateCustometAddressDto) {
    return this.custometAddressService.create(createCustometAddressDto);
  }

  @Get()
  findAll() {
    return this.custometAddressService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.custometAddressService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustometAddressDto: UpdateCustometAddressDto
  ) {
    return this.custometAddressService.update(id, updateCustometAddressDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.custometAddressService.remove(id);
  }
}
