import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Shop } from '../../shop/entity/shop.entity';
import { Product } from '../../product/entity/product.entity';

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Shop, (shop) => shop.inventories)
  shop: Shop;

  @ManyToOne(() => Product, (product) => product.inventories)
  product: Product;
}
