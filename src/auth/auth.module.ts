import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { AuthJwt } from 'src/common/jwt/auth-jwt.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UsersService, AuthJwt],
})
export class AuthModule {}
