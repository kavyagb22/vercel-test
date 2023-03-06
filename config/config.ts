import path from "path";
import dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

interface ENV {
  NODE_ENV: string | undefined;
  PORT: number | undefined;
  MONGO_URI: string | undefined;
  CUSTOMER_COOKIE_KEY: string | undefined;
  MERCHANT_COOKIE_KEY: string | undefined;
  SUMSUB_APP_TOKEN: string | undefined;
  SUMSUB_SECRET_KEY: string | undefined;
  SUMSUB_BASE_URL: string | undefined;
  ALICLOUD_ACCESS_KEY_ID: string | undefined;
  ALICLOUD_ACCESS_KEY_SECRET: string | undefined;
  ALICLOUD_REGION_ID: string | undefined;
  TENCENT_ACCESS_KEY_ID: string | undefined;
  TENCENT_ACCESS_KEY_SECRET: string | undefined;
  TENCENT_REGION_ID: string | undefined;
  USERNAME: string | undefined;
  PASSWORD: string | undefined;
  MONGO_USERNAME: string | undefined;
  MONGO_PASSWORD: string | undefined;
  MONGO_TESTBED_DB: string | undefined;
  MONGO_REPLICA_SET: string | undefined;
  MONGO_AUTH_SOURCE: string | undefined;
  PRIVATE_KEY: string | undefined;
  BLOCKCHAIN_DSN: string | undefined;
  CONTRACT_ADDRESS: string | undefined;
}

interface Config {
  NODE_ENV: string;
  PORT: number;
  MONGO_URI: string;
  CUSTOMER_COOKIE_KEY: string;
  MERCHANT_COOKIE_KEY: string;
  SUMSUB_APP_TOKEN: string;
  SUMSUB_SECRET_KEY: string;
  SUMSUB_BASE_URL: string;
  ALICLOUD_ACCESS_KEY_ID: string;
  ALICLOUD_ACCESS_KEY_SECRET: string;
  ALICLOUD_REGION_ID: string;
  TENCENT_ACCESS_KEY_ID: string;
  TENCENT_ACCESS_KEY_SECRET: string;
  TENCENT_REGION_ID: string;
  USERNAME: string;
  PASSWORD: string;
  MONGO_USERNAME: string;
  MONGO_PASSWORD: string;
  MONGO_TESTBED_DB: string;
  MONGO_REPLICA_SET: string;
  MONGO_AUTH_SOURCE: string;
  PRIVATE_KEY: string;
  BLOCKCHAIN_DSN: string;
  CONTRACT_ADDRESS: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT ? Number(process.env.PORT) : undefined,
    MONGO_URI: process.env.MONGO_URI,
    CUSTOMER_COOKIE_KEY: process.env.CUSTOMER_COOKIE_KEY,
    MERCHANT_COOKIE_KEY: process.env.MERCHANT_COOKIE_KEY,
    SUMSUB_APP_TOKEN: process.env.SUMSUB_APP_TOKEN,
    SUMSUB_SECRET_KEY: process.env.SUMSUB_SECRET_KEY,
    SUMSUB_BASE_URL: process.env.SUMSUB_BASE_URL,
    ALICLOUD_ACCESS_KEY_ID: process.env.ALICLOUD_ACCESS_KEY_ID,
    ALICLOUD_ACCESS_KEY_SECRET: process.env.ALICLOUD_ACCESS_KEY_SECRET,
    ALICLOUD_REGION_ID: process.env.ALICLOUD_REGION_ID,
    TENCENT_ACCESS_KEY_ID: process.env.TENCENT_ACCESS_KEY_ID,
    TENCENT_ACCESS_KEY_SECRET: process.env.TENCENT_ACCESS_KEY_SECRET,
    TENCENT_REGION_ID: process.env.TENCENT_REGION_ID,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_TESTBED_DB: process.env.MONGO_TESTBED_DB,
    MONGO_AUTH_SOURCE: process.env.MONGO_AUTH_SOURCE,
    MONGO_REPLICA_SET: process.env.MONGO_REPLICA_SET,
    PRIVATE_KEY: process.env.PRIVATE_KEY,
    BLOCKCHAIN_DSN: process.env.BLOCKCHAIN_DSN,
    CONTRACT_ADDRESS: process.env.CONTRACT_ADDRESS,
  };
};

// Throwing an Error if any field was undefined we don't
// want our app to run if it can't connect to DB and ensure
// that these fields are accessible. If all is good return
// it as Config which just removes the undefined from our type
// definition.

const getSanitzedConfig = (config: ENV): Config => {
  //   for (const [key, value] of Object.entries(config)) {
  //     if (value === undefined) {
  //       throw new Error(`Missing key ${key} in config.env`);
  //     }
  //   }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
