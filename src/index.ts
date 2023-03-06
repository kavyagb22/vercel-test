import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { createError } from "../src/common/helpers";
dotenv.config();

// connect to MongoDB
const main = async () => {
  const dbURI =
    "mongodb://" +
    process.env.MONGO_USERNAME +
    ":" +
    process.env.MONGO_PASSWORD +
    "@" +
    process.env.MONGO_URI +
    process.env.MONGO_TESTBED_DB +
    "?&replicaSet=" +
    process.env.MONGO_REPLICA_SET;

  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(dbURI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }

  const app = express();
  // check if API is working
  app.get("/", (_req: Request, res: Response) => {
    return res.send("Hey this is Crypto Gateway Backend running 🥳");
  });

  // error handling middleware
  app.use((error: any, req: any, res: any, next: any) => {
    console.log("Error Handling Middleware called");
    console.log("Path: ", req.path);
    console.error("Error: ", error);

    if (error.type == "time-out") {
      res.status(408).send(createError(error.message));
    } else {
      res.status(500).send(createError(error.message));
    }
  });

  const port = process.env.PORT || 2400;
  app.listen(port, () => {
    return console.log(
      `Crypto Gateway Backend now listening for requests on port ${port}`
    );
  });
};
main();
