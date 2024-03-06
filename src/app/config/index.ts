import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT,
  origin: process.env.ORIGIN,
  database_url: process.env.MONGODB_URL,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT,
  default_password: process.env.DEFAULT_PASSWORD,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRE_IN,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRE_IN,
  reset_pass_ui_link: process.env.RESET_PASSWORD_UI_LINK,
  cloudinary_cloud_name: process.env.CLOUD_NAME,
  cloudinary_api_key: process.env.CLOUDINARY_API_KEY,
  cloudinary_api_secret: process.env.CLOUDINARY_API_SECRET,
  super_admin_password: process.env.SUPER_ADMIN_PASSWORD,
  gmail: process.env.GMAIL_ADDRESS,
  gmailPass: process.env.GMAIL_PASSWORD,
};
