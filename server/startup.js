import path from 'path';
import dotenv from 'dotenv';

global.ENV_PRD = process.env.NODE_ENV === 'production';
global.ENV_DEV = process.env.NODE_ENV === 'development';
global.ENV_LOCAL = !ENV_DEV && !ENV_PRD;

if (ENV_LOCAL) {
  dotenv.config({ debug: process.env.DEBUG });
}
