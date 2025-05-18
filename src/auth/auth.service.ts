import { AdminService } from "./../admin/admin.service";
import { LoginDto } from "./dto/login.dto";
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { AdminDocument } from "../admin/schemas/admin.schema";
import { Request, Response } from "express";
@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}
  async generateTokens(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      is_active: admin.is_active,
      is_creator: admin.is_creator,
      email: admin.email,
    };
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken,
      refreshToken,
    };
  }
  async loginAdmin(loginDto: LoginDto, res: Response) {
    const admin = await this.adminService.findByEmail(loginDto.email);
    if (!admin) {
      throw new UnauthorizedException({ message: "Email yoki Password hato!" });
    }
    const validPasswor = await bcrypt.compare(
      loginDto.password,
      admin.hashed_password
    );
    if (!validPasswor) {
      throw new UnauthorizedException({ message: "Email yoki Password hato!" });
    }

    const tokens = await this.generateTokens(admin);
    res.cookie("refresh_token", tokens.refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.COOKIE_TIME),
    });
    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);
    admin.hashed_refresh_token = hashed_refresh_token;
    await admin.save();
    return {
      message: "Xush kelibsiz",
      adminId: admin._id,
      accessToken: tokens.accessToken,
    };
  }
  async signout(req: Request, res: Response) {
    const refresh_token = req.cookies?.refresh_token;
    if (!refresh_token) {
      throw new UnauthorizedException("Ro'yxatdan o'tmagan");
    }

    const user = await this.jwtService.verifyAsync(refresh_token, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!user) {
      throw new BadRequestException("Token topilmadi");
    }
    const adminData = await this.adminService.findOne(user.id);
    if (!adminData) {
      throw new BadRequestException("Bunday Tokenli shaxs topilmadi");
    }

    adminData.hashed_refresh_token = "";
    await adminData.save();

    res.clearCookie("refresh_token");

    return {
      success: true,
      message: "Signed out successfully",
    };
  }
  async refreshTokenAdmin(refresh_token: string, res: Response) {
    try {
      const admin = await this.jwtService.verifyAsync(refresh_token, {
        secret: process.env.REFRESH_TOKEN_KEY,
      });
      const admindata = await this.adminService.findOne(admin.id);

      if (!admindata) {
        throw new BadRequestException("Bunday tokenli foydalanuvchi topilmadi");
      }
      const tokens = await this.generateTokens(admindata);

      admindata.hashed_refresh_token = await bcrypt.hash(
        tokens.refreshToken,
        7
      );
      await admindata.save();

      res.cookie("refresh_token", tokens.refreshToken, {
        httpOnly: true,
        maxAge: Number(process.env.COOKIE_TIME),
      });

      return res.send({
        message: "Tokenlar yangilandi",
        accessToken: tokens.accessToken,
      });
    } catch (error) {
      throw new UnauthorizedException("Tokenni yangilashda xatolik yuz berdi");
    }
  }
}
