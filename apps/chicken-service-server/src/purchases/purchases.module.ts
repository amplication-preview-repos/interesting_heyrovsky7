import { Module } from "@nestjs/common";
import { PurchasesModuleBase } from "./base/purchases.module.base";
import { PurchasesService } from "./purchases.service";
import { PurchasesController } from "./purchases.controller";
import { PurchasesResolver } from "./purchases.resolver";

@Module({
  imports: [PurchasesModuleBase],
  controllers: [PurchasesController],
  providers: [PurchasesService, PurchasesResolver],
  exports: [PurchasesService],
})
export class PurchasesModule {}
