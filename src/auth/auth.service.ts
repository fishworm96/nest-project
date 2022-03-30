import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    // private readonly userService: UserService,
    private readonly jwtService: JwtService,
    ) {}

    createToken(user: Partial<UserEntity>) {
      return this.jwtService.sign(user);
    }

    async login(user: Partial<UserEntity>) {
      const token = this.createToken({
        id: user.id,
        username: user.username,
        role: user.role
      });

      return { token };
    }
    
}
