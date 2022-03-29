import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService, PostsRo } from './posts.service';

@ApiTags('文章')
@Controller('post')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @ApiOperation({ summary: '创建文章' })
  @Post()
  create(@Body() post: CreatePostDto) {
    return this.postsService.create(post);
  }

  @ApiOperation({ summary: '查询所有文章'})
  @ApiOkResponse({ status: 201, description: 'The record has been successfully created.'})
  @Get()
  findAll(@Query() query): Promise<PostsRo> {
    return this.postsService.findAll(query);
  }

  @ApiOperation({ summary: '查询特定文章'})
  @Get(':id')
  findOne(@Param('id') id) {
    return this.postsService.findOneById(id);
  }

  @ApiOperation({ summary: '更新文章'})
  @Patch(':id')
  update(@Param('id') id, @Body() post) {
    return this.postsService.updateById(id, post);
  }

  @ApiOperation({ summary: '删除文章'})
  @ApiOkResponse({})
  @Delete(':id')
  remove(@Param('id') id) {
    return this.postsService.remove(id);
  }
}
