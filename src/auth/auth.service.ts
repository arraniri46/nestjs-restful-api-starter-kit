import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UpdatePasswordDto } from './dto/update-password.dto';

@Injectable()
export class AuthService {
  constructor(@Inject() private usersService: UsersService) {}

  login(loginDto: LoginDto) {
    return this.usersService.findByUsernameAndPassword(loginDto);
  }

  updatePassword(id: number, updatePasswordDto: UpdatePasswordDto) {
    return `This action updates a #${id} auth`;
  }

  register(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  validate() {
    return 'This return authenticated user';
  }
}
