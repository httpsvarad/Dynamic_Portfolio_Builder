/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.jsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://dev-portfolio_owner:aPoviUjzA48s@ep-weathered-salad-a12gaud0.ap-southeast-1.aws.neon.tech/dev-portfolio?sslmode=require',
    }
  };

 