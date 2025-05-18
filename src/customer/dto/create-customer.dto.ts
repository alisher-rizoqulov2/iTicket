import { IsEmail, IsOptional, IsString } from "class-validator";

export class CreateCustomerDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsEmail()
  email: string;

  @IsString()
  phone_number: string;

  @IsString()
  password: string;

  @IsOptional()
  birth_date?: Date;

  @IsOptional()
  @IsString()
  gender?: string;
}
