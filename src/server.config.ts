import { CliServerConfig } from '@refract-cms/cli';

const serverConfig: CliServerConfig = {
  mongoConnectionString: process.env.MONGODB_URI,
  filesPath: 'files/',
  auth: {
    adminCredentials: {
      username: 'admin',
      password: 'pw'
    },
    jwt: {
      issuer: 'my-app',
      secret: process.env.JWT_SECRET
    }
  }
};

export default serverConfig;
