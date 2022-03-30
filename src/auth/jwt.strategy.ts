import { UserEntity } from 'src/user/entities/user.entity';
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Strategy } from "passport-local";
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, StrategyOptions } from 'passport-jwt';

export class JwtStorage extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
    ) {
      super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: configService.get('SECRET')
      }as StrategyOptions);
    }

    async validate(user: UserEntity) {
      const existUser = await this.authService.login(user);
      if (!existUser) {
        throw new UnauthorizedException('token不正确');
      }
      return existUser;
    }
}