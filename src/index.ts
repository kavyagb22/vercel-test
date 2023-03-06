import express, { Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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
  const port = process.env.PORT || 8080;

  app.get("/", (_req: Request, res: Response) => {
    return res.send("Express Typescript on Vercel");
  });

  app.get("/ping", (_req: Request, res: Response) => {
    return res.send("pong 🏓");
  });

  app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
  });
};
main();
