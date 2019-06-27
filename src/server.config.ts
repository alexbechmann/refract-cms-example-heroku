import dotenv from 'dotenv';
import { CliServerConfig } from '@refract-cms/cli';

const localEnv = dotenv.config().parsed;

const serverConfig: CliServerConfig = {
  mongoConnectionString: process.env.MONGO_URI || localEnv.MONGO_URI,
  filesPath: 'files/',
  auth: {
    adminCredentials: {
      username: 'admin',
      password: 'pw'
    },
    jwt: {
      issuer: 'my-app',
      secret: process.env.JWT_SECRET || localEnv.JWT_SECRET
    }
  }
};

export default serverConfig;
