import dotEnv from "dotenv";

dotEnv.config();

export const config = {
  MONGO_URI: process.env.MONGO_URI,
  REFRESH_SECRET_TOKEN: process.env.REFRESH_SECRET_TOKEN,
  ACCESS_SECRET_TOKEN: process.env.ACCESS_SECRET_TOKEN,
}