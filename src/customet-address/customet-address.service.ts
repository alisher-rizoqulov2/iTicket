import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateCustometAddressDto } from "./dto/create-customet-address.dto";
import { UpdateCustometAddressDto } from "./dto/update-customet-address.dto";
import { CustomerAddress, CustomerAddressDocument, CustomerAddressSchema } from "./schemas/customet-address.schema";
import { RegionService } from "../region/region.service";
import { DistrictService } from "../district/district.service";
import { CustomerService } from "../customer/customer.service";

@Injectable()
export class CustometAddressService {
  constructor(
    @InjectModel(CustomerAddress.name)
    private readonly custometAddressModel: Model<CustomerAddress>,
        private readonly regionService: RegionService,
        private readonly districtService: DistrictService,
        private readonly customerService: CustomerService,
    
  ) {}

  async create(createDto: CreateCustometAddressDto) {
    const{customer_id,region_id,district_id}=createDto
    const customer = await this.customerService.findOne(customer_id.toString());
    if (!customer) {
      throw new NotFoundException("Customer not found");
    }
    const region = await this.regionService.findOne(region_id.toString());
    if (!region) {
      throw new NotFoundException("Region not found");
    }
    const district = await this.districtService.findOne(district_id.toString());
    if (!district) {
      throw new NotFoundException("District not found");
    }
    
    return this.custometAddressModel.create(createDto);
  }

  findAll() {
    return this.custometAddressModel
      .find()
      .populate("region_id")
      .populate("district_id")
      .populate("customer_id");
  }

  findOne(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    console.log(_id);
    return this.custometAddressModel
      .findById(_id)
      .populate("region_id")
      .populate("district_id");
  }

  update(_id: string, updateDto: UpdateCustometAddressDto) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.custometAddressModel.findByIdAndUpdate(_id, updateDto, {
      new: true,
    });
  }

  remove(_id: string) {
    if (!Types.ObjectId.isValid(_id))
      throw new NotFoundException("Invalid ID format");
    return this.custometAddressModel.findByIdAndDelete(_id);
  }
}
