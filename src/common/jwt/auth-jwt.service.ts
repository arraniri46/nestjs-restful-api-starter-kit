import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthJwt extends JwtService {
  async generateToken() {
    const secret = process.env.JWT_SECRET || 'secret';

    const token = await this.signAsync(
      { name: 'Garda', age: 28 },
      { algorithm: 'HS256', secret },
    );

    console.log(token);
  }
}
