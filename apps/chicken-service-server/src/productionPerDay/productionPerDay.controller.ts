import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProductionPerDayService } from "./productionPerDay.service";
import { ProductionPerDayControllerBase } from "./base/productionPerDay.controller.base";

@swagger.ApiTags("productionPerDays")
@common.Controller("productionPerDays")
export class ProductionPerDayController extends ProductionPerDayControllerBase {
  constructor(protected readonly service: ProductionPerDayService) {
    super(service);
  }
}
