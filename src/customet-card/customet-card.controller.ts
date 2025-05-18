import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { CustometCardService } from "./customet-card.service";
import { UpdateCustometCardDto } from "./dto/update-customet-card.dto";
import { CreateCustomerCardDto } from "./dto/create-customet-card.dto";

@Controller("customer-card")
export class CustometCardController {
  constructor(private readonly custometCardService: CustometCardService) {}

  @Post()
  create(@Body() createCustometCardDto: CreateCustomerCardDto) {
    console.log(createCustometCardDto);
    return this.custometCardService.create(createCustometCardDto);
  }

  @Get()
  findAll() {
    return this.custometCardService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.custometCardService.findOne(id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateCustometCardDto: UpdateCustometCardDto
  ) {
    return this.custometCardService.update(id, updateCustometCardDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.custometCardService.remove(id);
  }
}
