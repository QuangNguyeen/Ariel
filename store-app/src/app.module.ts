import { Module , Global} from '@nestjs/common';
import { AppController } from './app.controller';
import {ProductController} from "./product.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProductsService} from "./models/products.service";
import {UsersService} from "./models/users.service";
import {Product} from "./models/product.entity";
import {User} from "./models/user.entity";
import {AdminModule} from "./admin/admin.module";
import {AuthModule} from "./auth/auth.module";
import {CartModule} from "./cart/cart.module";

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
      TypeOrmModule.forFeature([Product, User]),
      AdminModule,
      AuthModule,
      CartModule,
  ],
    controllers: [AppController,ProductController],
    providers: [ProductsService, UsersService],
    exports: [ProductsService, UsersService]
})
export class AppModule {}
