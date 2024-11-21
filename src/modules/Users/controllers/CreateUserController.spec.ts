import supertest from "supertest";
import { createServer } from "../../../utils/createServer";
import AppDataSource from "../../../database/data-source";
import { dropDataBase } from "utils/dropDataBase";

const app = createServer();

describe("CreateUserController", () => {
  beforeAll(async () => {
    await AppDataSource.initialize();
  });
  beforeEach(async () => {
    await dropDataBase();
  });

  afterEach(async () => {
    await dropDataBase();
  });
  it("should be able to create a new user", async () => {
    const user = {
      name: "John Doe",
      email: "john.doe@email.com",
      password: "123456",
    };

    const { body } = await supertest(app).post("/users").send(user);

    expect(body).toHaveProperty("id");
    expect(body.name).toBe(user.name);
    expect(body.email).toBe(user.email);
  });
});
