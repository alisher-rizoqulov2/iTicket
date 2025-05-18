import { Injectable, NotFoundException } from "@nestjs/common";
import { UpdateCustometCardDto } from "./dto/update-customet-card.dto";
import { InjectModel } from "@nestjs/mongoose";
import { CustomerCard } from "./schemas/customet-card.schema";
import { Model, Types } from "mongoose";
import { CreateCustomerCardDto } from "./dto/create-customet-card.dto";
import { CustomerService } from "../customer/customer.service";

@Injectable()
export class CustometCardService {
  constructor(
    @InjectModel(CustomerCard.name)
    private readonly custometCardModel: Model<CustomerCard>,
    private readonly customerService: CustomerService
  ) {}
  async create(createCustometCardDto: CreateCustomerCardDto) {
    const { customer_id } = createCustometCardDto;
    console.log(customer_id);
    const customer = await this.customerService.findOne(customer_id.toString());
    if (!customer) {
      throw new NotFoundException("Customer not found");
    }
    return this.custometCardModel.create(createCustometCardDto);
  }

  findAll() {
    return this.custometCardModel.find().populate("customer_id");
  }

  findOne(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.custometCardModel.findById(id);
  }

  update(id: string, updateCustometCardDto: UpdateCustometCardDto) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.custometCardModel.updateOne({ _id: id }, updateCustometCardDto);
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.custometCardModel.deleteOne({ _id: id });
  }
}
