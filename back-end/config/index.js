module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  frontendUrl: process.env.FRONTEND_URL || "localhost:3000",
  databaseUrl: process.env.DATABASE_URL || "postgresql-metric-15069",
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  jwtConfig: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
};
