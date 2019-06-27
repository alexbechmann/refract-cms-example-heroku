import dotenv from 'dotenv';
import { CliServerConfig } from '@refract-cms/cli';

let env;

if (process.env.NODE_ENV !== 'production') {
  env = dotenv.config().parsed;
} else {
  const getEnv = () => process.env;
  env = getEnv();
}

const serverConfig: CliServerConfig = {
  mongoConnectionString: env.MONGO_URI,
  filesPath: 'files/',
  auth: {
    adminCredentials: {
      username: 'admin',
      password: 'pw'
    },
    jwt: {
      issuer: 'my-app',
      secret: env.JWT_SECRET
    }
  }
};

export default serverConfig;
