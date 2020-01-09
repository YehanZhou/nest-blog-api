import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { Post } from './post.model';

// 模块，控制器只能用模块中导入过的模型
@Module({
  imports: [
    TypegooseModule.forFeature([Post])
  ],
  controllers: [PostsController]
})
export class PostsModule {}
