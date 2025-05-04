import { Module , Global} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import {ProductController} from "./product.controller";

import {ProductsService} from "./models/products.service";
import {UsersService} from "./models/users.service";
import {OrdersService} from "./models/orders.service";

import {Product} from "./models/product.entity";
import {User} from "./models/user.entity";
import {Order} from "./models/order.entity";

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
      TypeOrmModule.forFeature([Product, User, Order]),
      AdminModule,
      AuthModule,
      CartModule,
  ],
    controllers: [AppController,ProductController],
    providers: [ProductsService, UsersService, OrdersService],
    exports: [ProductsService, UsersService, OrdersService]
})
export class AppModule {}
