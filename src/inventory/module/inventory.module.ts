import { Module } from '@nestjs/common';
import { InventoryService } from '../service/inventory.service';
import { InventoryController } from '../controller/inventory.controller';

@Module({
  providers: [InventoryService],
  controllers: [InventoryController]
})
export class InventoryModule {}
