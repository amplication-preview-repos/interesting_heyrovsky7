import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchasesServiceBase } from "./base/purchases.service.base";

@Injectable()
export class PurchasesService extends PurchasesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
