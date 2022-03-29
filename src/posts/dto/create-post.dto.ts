import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostDto {
  @ApiProperty({ description: '文章标题', example: '测试文章'})
  @IsNotEmpty({ message: '缺少标题'})
  readonly title: string;

  @ApiProperty({ description: '作者', example: '作者'})
  @IsNotEmpty({ message: '缺少作者'})
  readonly author: string;

  @ApiProperty({ description: '内容', example: '阿巴阿巴'})
  @IsNotEmpty({ message: '缺少内容'})
  readonly content: string;

  @ApiProperty({ description: '文章封面', example: 'http://xxx'})
  readonly cover_url: string;

  @ApiProperty({ description: '文章类型', example: '0'})
  @IsNumber()
  readonly type: number;
}
