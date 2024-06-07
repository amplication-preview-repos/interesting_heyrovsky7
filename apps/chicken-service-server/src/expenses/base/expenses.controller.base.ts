/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ExpensesService } from "../expenses.service";
import { ExpensesCreateInput } from "./ExpensesCreateInput";
import { Expenses } from "./Expenses";
import { ExpensesFindManyArgs } from "./ExpensesFindManyArgs";
import { ExpensesWhereUniqueInput } from "./ExpensesWhereUniqueInput";
import { ExpensesUpdateInput } from "./ExpensesUpdateInput";

export class ExpensesControllerBase {
  constructor(protected readonly service: ExpensesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Expenses })
  async createExpenses(
    @common.Body() data: ExpensesCreateInput
  ): Promise<Expenses> {
    return await this.service.createExpenses({
      data: data,
      select: {
        amount: true,
        createdAt: true,
        expenseDate: true,
        expenseType: true,
        id: true,
        notes: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Expenses] })
  @ApiNestedQuery(ExpensesFindManyArgs)
  async expensesItems(@common.Req() request: Request): Promise<Expenses[]> {
    const args = plainToClass(ExpensesFindManyArgs, request.query);
    return this.service.expensesItems({
      ...args,
      select: {
        amount: true,
        createdAt: true,
        expenseDate: true,
        expenseType: true,
        id: true,
        notes: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Expenses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async expenses(
    @common.Param() params: ExpensesWhereUniqueInput
  ): Promise<Expenses | null> {
    const result = await this.service.expenses({
      where: params,
      select: {
        amount: true,
        createdAt: true,
        expenseDate: true,
        expenseType: true,
        id: true,
        notes: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Expenses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateExpenses(
    @common.Param() params: ExpensesWhereUniqueInput,
    @common.Body() data: ExpensesUpdateInput
  ): Promise<Expenses | null> {
    try {
      return await this.service.updateExpenses({
        where: params,
        data: data,
        select: {
          amount: true,
          createdAt: true,
          expenseDate: true,
          expenseType: true,
          id: true,
          notes: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Expenses })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteExpenses(
    @common.Param() params: ExpensesWhereUniqueInput
  ): Promise<Expenses | null> {
    try {
      return await this.service.deleteExpenses({
        where: params,
        select: {
          amount: true,
          createdAt: true,
          expenseDate: true,
          expenseType: true,
          id: true,
          notes: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
