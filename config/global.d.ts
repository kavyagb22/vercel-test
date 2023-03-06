export default interface ProcessEnv {
  NODE_ENV: string;
  PORT: string;
  MONGO_URI: string;
  CUSTOMER_COOKIE_KEY: string;
  MERCHANY_COOKIE_KEY: string;
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
