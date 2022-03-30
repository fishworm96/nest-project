import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @ApiProperty({ description: '用户名', example: 'qwer'})
  readonly username: string;

  @ApiProperty({ description: '昵称', example: '张三'})
  readonly nickname: string;

  @ApiProperty({ description: '密码', example: '111'})
  readonly password: string;

  @ApiProperty({ description: '邮箱', example: "123@qq.com"})
  readonly email: string;
}
