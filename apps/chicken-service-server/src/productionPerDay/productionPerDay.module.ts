import { Module } from "@nestjs/common";
import { ProductionPerDayModuleBase } from "./base/productionPerDay.module.base";
import { ProductionPerDayService } from "./productionPerDay.service";
import { ProductionPerDayController } from "./productionPerDay.controller";
import { ProductionPerDayResolver } from "./productionPerDay.resolver";

@Module({
  imports: [ProductionPerDayModuleBase],
  controllers: [ProductionPerDayController],
  providers: [ProductionPerDayService, ProductionPerDayResolver],
  exports: [ProductionPerDayService],
})
export class ProductionPerDayModule {}
