import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";
import { CustomerModule } from "./customer.module";
import { JwtService } from "@nestjs/jwt";
import { InjectModel } from "@nestjs/mongoose";
import { Customer } from "./schemas/customer.schema";
import { Model, Types } from "mongoose";
import * as bcrypt from "bcrypt";

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer.name) private customerModel: Model<Customer>
  ) {}

  async create(createCustomerDto: CreateCustomerDto) {
    const { email, password } = createCustomerDto;
    const existingAdmin = await this.customerModel.findOne({ email });
    if (existingAdmin) {
      throw new BadRequestException("Bunday emailli foydalanuvchi mavjud");
    }
    const hashed_password = await bcrypt.hash(password, 7);

    return this.customerModel.create({ ...createCustomerDto, hashed_password });
  }

  findAll() {
    return this.customerModel.find();
  }

  findOne(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.customerModel.findById(_id);
  }
  async findByEmail(email: string) {
    return this.customerModel.findOne({ email });
  }

  update(_id: string, updateCustomerDto: UpdateCustomerDto) {
    if (!Types.ObjectId.isValid(_id))
              throw new NotFoundException("Invalid ID format");
    return this.customerModel.findByIdAndUpdate(_id, updateCustomerDto, {
      new: true,
    });
  }

  remove(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.customerModel.findByIdAndDelete(_id).exec();
  }
}
