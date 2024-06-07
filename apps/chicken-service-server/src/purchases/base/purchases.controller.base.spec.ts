import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { PurchasesController } from "../purchases.controller";
import { PurchasesService } from "../purchases.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cost: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  item: "exampleItem",
  purchaseDate: new Date(),
  quantity: 42,
  supplierName: "exampleSupplierName",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cost: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  item: "exampleItem",
  purchaseDate: new Date(),
  quantity: 42,
  supplierName: "exampleSupplierName",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cost: 42.42,
    createdAt: new Date(),
    id: "exampleId",
    item: "exampleItem",
    purchaseDate: new Date(),
    quantity: 42,
    supplierName: "exampleSupplierName",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cost: 42.42,
  createdAt: new Date(),
  id: "exampleId",
  item: "exampleItem",
  purchaseDate: new Date(),
  quantity: 42,
  supplierName: "exampleSupplierName",
  updatedAt: new Date(),
};

const service = {
  createPurchases() {
    return CREATE_RESULT;
  },
  purchasesItems: () => FIND_MANY_RESULT,
  purchases: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Purchases", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PurchasesService,
          useValue: service,
        },
      ],
      controllers: [PurchasesController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /purchases", async () => {
    await request(app.getHttpServer())
      .post("/purchases")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /purchases", async () => {
    await request(app.getHttpServer())
      .get("/purchases")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          purchaseDate: FIND_MANY_RESULT[0].purchaseDate.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /purchases/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchases"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /purchases/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/purchases"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        purchaseDate: FIND_ONE_RESULT.purchaseDate.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /purchases existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/purchases")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        purchaseDate: CREATE_RESULT.purchaseDate.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/purchases")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
