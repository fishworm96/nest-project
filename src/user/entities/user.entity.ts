import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { Exclude } from "class-transformer";

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  username: string;

  @Column({ length: 100 })
  nickname: string;

  @Column({ select: false})
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @Column()
  email: string;

  @Column('simple-enum', { enum: ['root', 'author', 'visitor'] })
  role: string;

  @Column({ name: 'create_time', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createTime: Date;

  @Column({ name: 'update_time', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  updateTime: Date;

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password)
  }
}