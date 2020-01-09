import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
// import * as mongoose from 'mongoose'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // mongoose.connect('mongodb://localhost:27017/nest-blog-api', {
  //   // mongodb+srv://yehan_zhou:8895400@cluster0-5oxjx.mongodb.net/test?retryWrites=true&w=majority
  //   useNewUrlParser: true, 
  //   useFindAndModify: false,
  //   useCreateIndex: true,
  //   useUnifiedTopology: true
  // }).then(
  //   ()=>{
  //     console.log("connected to mongoDB")
  //   },
  //   (err)=>{
  //     console.log("err",err)
  //   }
  // )
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('Posts example')
    .setDescription('The posts API description')
    .setVersion('1.0')
    .addTag('posts')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document); // 路径直接api会冲突

  await app.listen(5000);
}
bootstrap();
