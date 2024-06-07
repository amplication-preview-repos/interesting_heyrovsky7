import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductionPerDayServiceBase } from "./base/productionPerDay.service.base";

@Injectable()
export class ProductionPerDayService extends ProductionPerDayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
