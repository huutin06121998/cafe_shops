import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/module/user.module';
import { ProductModule } from './product/module/product.module';
import { OrderModule } from './order/module/order.module';
import { InventoryModule } from './inventory/module/inventory.module';
import { AuthService } from './auth/service/auth.service';
import { AuthController } from './auth/controller/auth.controller';
import { AuthModule } from './auth/module/auth.module';
import { ShopController } from './shop/controller/shop.controller';
import { ShopService } from './shop/service/shop.service';
import { ShopModule } from './shop/module/shop.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.development.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5434,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    ProductModule,
    OrderModule,
    InventoryModule,
    AuthModule,
    ShopModule,
  ],
  controllers: [AppController, AuthController, ShopController],
  providers: [AppService, AuthService, ShopService],
})
export class AppModule {}
