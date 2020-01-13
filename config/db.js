const connectionObject = {
  'development': {
    client: 'pg',
    connection: {
      host: process.env.DB_DEV_URL,
      user: process.env.DB_DEV_USERNAME,
      password: process.env.DB_DEV_PASSWORD,
      database: 'jeketibot_backend'
    }
  },
  'production': {
    client: 'pg',
    connection: {
      socketPath: process.env.DB_PROD_URL,
      user: process.env.DB_PROD_USERNAME,
      password: process.env.DB_PROD_PASSWORD,
      database: 'jeketibot_backend'
    }
  }
}


exports.getConnection = () => {
  const env = process.env.NODE_ENV || 'development';
  return connectionObject[env];
}