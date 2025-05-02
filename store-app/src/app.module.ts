import { Module , Global} from '@nestjs/common';
import { AppController } from './app.controller';
import {ProductController} from "./product.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProductsService} from "./models/products.service";
import {Product} from "./models/product.entity";
import {AdminModule} from "./admin/admin.module";
import {AdminProductsController} from "./admin/admin.products.controller";
@Global()
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
      TypeOrmModule.forFeature([Product]),
      AdminModule,
  ],
    controllers: [AppController,ProductController],
    providers: [ProductsService],
    exports: [ProductsService]
})
export class AppModule {}
