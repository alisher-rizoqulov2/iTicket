import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Admin, AdminDocument } from "./schemas/admin.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import * as bcrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin.name) private adminModel: Model<Admin>) {}

  async create(createAdminDto: CreateAdminDto) {
    const { email, password, confirm_password } = createAdminDto;

    const existingAdmin = await this.adminModel.findOne({ email });
    if (existingAdmin) {
      throw new BadRequestException("Bunday emailli foydalanuvchi mavjud");
    }

    if (password !== confirm_password) {
      throw new BadRequestException("Parollar mos emas");
    }

    const hashed_password = await bcrypt.hash(password, 7);

    return this.adminModel.create({ ...createAdminDto, hashed_password });
  }

  findAll() {
    return this.adminModel.find();
  }

  findOne(id: string) {
    if (!Types.ObjectId.isValid(id))
              throw new NotFoundException("Invalid ID format");
    return this.adminModel.findById(id);
  }

  async findByEmail(email: string) {
    return this.adminModel.findOne({ email })
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    if (updateAdminDto.password) {
      if (updateAdminDto.password !== updateAdminDto.confirm_password) {
        throw new BadRequestException("Parollar mos emas");
      }
      updateAdminDto.password = await bcrypt.hash(updateAdminDto.password, 7);
      delete updateAdminDto.confirm_password;
    }

    return this.adminModel.findByIdAndUpdate(id, updateAdminDto, { new: true });
  }

  remove(id: string) {
    if (!Types.ObjectId.isValid(id))
      throw new NotFoundException("Invalid ID format");
    return this.adminModel.findByIdAndDelete(id).exec();
  }
}
