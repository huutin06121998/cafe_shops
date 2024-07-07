import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../../product/entity/product.entity';
import { Inventory } from '../../inventory/entity/inventory.entity';

@Entity()
export class Shop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  description: string;

  @OneToMany(() => Product, (product) => product.id)
  products: Product[];

  @OneToMany(() => Inventory, (inventory) => inventory.shop)
  inventories: Inventory[];
}
