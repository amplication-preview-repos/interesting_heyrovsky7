import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchasesService } from "./purchases.service";
import { PurchasesControllerBase } from "./base/purchases.controller.base";

@swagger.ApiTags("purchases")
@common.Controller("purchases")
export class PurchasesController extends PurchasesControllerBase {
  constructor(protected readonly service: PurchasesService) {
    super(service);
  }
}
