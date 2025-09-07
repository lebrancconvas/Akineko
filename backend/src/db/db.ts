import pg, { type PoolConfig } from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

const productionConfig: PoolConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
};

const developmentConfig: PoolConfig = {
  user: process.env.DATABASE_USERNAME || "",
  host: process.env.DATABASE_HOST || "localhost",
  database: process.env.DATABASE_NAME || "",
  password: process.env.DATABASE_PASSWORD || "",
  port: Number(process.env.DATABASE_PORT as string) || 5432
};

const pool = new Pool(process.env.NODE_ENV === 'development' ? developmentConfig : productionConfig);

export const DB = async() => {
  try {
    const client = await pool.connect();
    console.log(`[SUCCESS] Connect to database success!`);
    client.release();
  } catch(err) {
    console.error(`[ERROR] Cannot connect to database.`, err);
    process.exit(1);
  }
};

export default pool;