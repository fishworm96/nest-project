import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class LoginDto {
  @ApiProperty({ description: '帐号'})
  @IsNotEmpty({ message: '帐号不能为空'})
  readonly username: string;

  @ApiProperty({ description: 'Miami'})
  @IsNotEmpty({ message: '密码不能为空'})
  readonly password: string;
}