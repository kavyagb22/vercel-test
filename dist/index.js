"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const helpers_1 = require("../src/common/helpers");
dotenv_1.default.config();
// connect to MongoDB
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const dbURI = "mongodb://" +
        process.env.MONGO_USERNAME +
        ":" +
        process.env.MONGO_PASSWORD +
        "@" +
        process.env.MONGO_URI +
        process.env.MONGO_TESTBED_DB +
        "?&replicaSet=" +
        process.env.MONGO_REPLICA_SET;
    try {
        mongoose_1.default.set("strictQuery", false);
        yield mongoose_1.default.connect(dbURI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log(error);
    }
    const app = (0, express_1.default)();
    // check if API is working
    app.get("/", (_req, res) => {
        return res.send("Hey this is Crypto Gateway Backend running 🥳");
    });
    // error handling middleware
    app.use((error, req, res, next) => {
        console.log("Error Handling Middleware called");
        console.log("Path: ", req.path);
        console.error("Error: ", error);
        if (error.type == "time-out") {
            res.status(408).send((0, helpers_1.createError)(error.message));
        }
        else {
            res.status(500).send((0, helpers_1.createError)(error.message));
        }
    });
    const port = process.env.PORT || 2400;
    app.listen(port, () => {
        return console.log(`Crypto Gateway Backend now listening for requests on port ${port}`);
    });
});
main();
//# sourceMappingURL=index.js.map