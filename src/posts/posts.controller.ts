import { Controller, Get, Post, Put, Delete, Param, Body, Inject } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Post as PostSchema } from './post.model';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType } from '@typegoose/typegoose/lib/types';

@Controller('posts')
@ApiTags('帖子')
export class PostsController {
    constructor(
        @InjectModel(PostSchema) private readonly PostModel: ModelType<PostSchema>
    ) {}

    @Get()
    @ApiOperation({ summary: '帖子列表'})
    async index () {
        return await this.PostModel.find()
    }

    @Post()
    @ApiOperation({ summary: '创建帖子'})
    async create (@Body() createPostDto: PostSchema) {  // 参数装饰器
        await this.PostModel.create(createPostDto)
        return {
            success: true
        }
    }

    @Get(':id')
    @ApiOperation({ summary: '帖子详情'})
    async detail (@Param('id') id: string) {
        return await this.PostModel.findById(id)
    }

    @Put(':id')
    @ApiOperation({ summary: '编辑帖子'})
    async update (@Param('id') id: string, @Body() updatePostDto: PostSchema) {
        await this.PostModel.findByIdAndUpdate(id, updatePostDto)
        return {
           success: true
        }
    }

    @Delete(':id')
    @ApiOperation({ summary: '删除帖子'})
    async remove(@Param('id') id: string) {
        await this.PostModel.findByIdAndDelete(id)
        return {
            success: true
        }
    }
}
