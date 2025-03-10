import "reflect-metadata";
import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "../database/data-source";
import { AppError } from "../shared/errors/AppError";
import { routes } from "../routes/routes";
import cors from "cors";

export function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(routes);

  app.use(
    (
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
    ) => {
      console.log(error);

      if (error instanceof AppError) {
        return response.status(error.status).send({
          status: "error",
          message: error.message,
        });
      }

      return response.status(500).send({
        status: "error",
        message: "Internal Server Error!",
      });
    }
  );

  return app;
}
