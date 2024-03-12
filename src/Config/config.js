import dotenv from "dotenv";
dotenv.config();

export default{
  port: process.env.PORT,
  urlmongo: process.env.MONGO_URL,
  adminname: process.env.ADMIN_NAME,
  adminpassword: process.env.ADMIN_PASSWORD,
  mail: process.env.GMAIL_ACCOUNT,
  mailPassword: process.env.GMAIL_PASSWORD
}