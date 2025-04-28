import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {ProductController} from "./product.controller";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
      TypeOrmModule.forRoot(
          {
              "type": "mysql",
              "host": "localhost",
              "port": 3306,
              "username": "root",
              "password": "quang12345",
              "database": "ariel",
              "entities": ["dist/**/*.entity{.ts,.js}"],
              "synchronize": true
          }
      ),
  ],
  controllers: [AppController,ProductController],
})
export class AppModule {}
