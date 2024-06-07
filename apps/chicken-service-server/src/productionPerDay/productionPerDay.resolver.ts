import * as graphql from "@nestjs/graphql";
import { ProductionPerDayResolverBase } from "./base/productionPerDay.resolver.base";
import { ProductionPerDay } from "./base/ProductionPerDay";
import { ProductionPerDayService } from "./productionPerDay.service";

@graphql.Resolver(() => ProductionPerDay)
export class ProductionPerDayResolver extends ProductionPerDayResolverBase {
  constructor(protected readonly service: ProductionPerDayService) {
    super(service);
  }
}
