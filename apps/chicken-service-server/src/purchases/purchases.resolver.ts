import * as graphql from "@nestjs/graphql";
import { PurchasesResolverBase } from "./base/purchases.resolver.base";
import { Purchases } from "./base/Purchases";
import { PurchasesService } from "./purchases.service";

@graphql.Resolver(() => Purchases)
export class PurchasesResolver extends PurchasesResolverBase {
  constructor(protected readonly service: PurchasesService) {
    super(service);
  }
}
