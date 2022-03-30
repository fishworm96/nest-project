import { RegisterDto } from './dto/register.dto';
import { UserEntity } from './entities/user.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async register(createUser: RegisterDto): Promise<RegisterDto> {
    const { username, password } = createUser;

    const existUser = await this.userRepository.findOne({
      where: { username },
    });
    if(existUser){
        throw new HttpException("用户名已存在", HttpStatus.BAD_REQUEST)
    }
    const newUser = await this.userRepository.create(createUser);
    return await this.userRepository.save(newUser);
  }
}