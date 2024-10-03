import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from 'src/auth/dto/login.dto';

// mock users
const users = [
  {
    id: 1,
    username: 'johndoe',
    password: 'rahasia',
  },
  {
    id: 2,
    username: 'johnkowi',
    password: 'password',
  },
];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return users;
  }

  findOne(id: number) {
    const user = users.find((user) => user.id === id);

    if (!user) throw new NotFoundException();

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  findByUsernameAndPassword(loginDto: LoginDto) {
    const user = users.find((user) => user.username === loginDto.username);

    if (!user) throw new NotFoundException();

    if (user.password !== loginDto.password) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
