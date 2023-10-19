import mysql from "serverless-mysql";

const pool = mysql({
  config: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT as any,
  },
});

export async function executeQuery({
  query,
  values,
}: {
  query: string;
  values?: any;
}) {
  try {
    const results = await pool.query(query, values);
    await pool.end();
    return results;
  } catch (error) {
    return { error };
  }
}
