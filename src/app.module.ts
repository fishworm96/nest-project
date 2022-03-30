import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot([]), PostsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
