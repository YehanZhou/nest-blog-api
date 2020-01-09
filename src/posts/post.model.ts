import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator'

// 模型
export class Post {
    @prop()
    @ApiProperty({description: '帖子标题', example: '帖子标题1'})
    @IsNotEmpty({message: '请填写标题'})
    title: string

    @prop()
    @ApiProperty({description: '帖子内容', example: '帖子内容1'})
    content: string

}
