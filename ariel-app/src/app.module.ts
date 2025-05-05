import { Module , Global} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import {ProductController} from "./product/product.controller";

import {ProductsService} from "./models/product/products.service";
import {UsersService} from "./models/user/users.service";
import {OrdersService} from "./models/order/orders.service";

import {Product} from "./models/product/product.entity";
import {User} from "./models/user/user.entity";
import {Order} from "./models/order/order.entity";

import {AdminModule} from "./admin/admin.module";
import {AuthModule} from "./auth/auth.module";
import {CartModule} from "./cart/cart.module";
import {AccountModule} from "./account/account.module";


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
      AccountModule,
  ],
    controllers: [AppController,ProductController],
    providers: [ProductsService, UsersService, OrdersService],
    exports: [ProductsService, UsersService, OrdersService]
})
export class AppModule {}
