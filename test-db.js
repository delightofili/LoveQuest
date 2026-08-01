import { Client } from "pg";
import "dotenv/config";

const client = new Client({
  connectionString: process.env.DIRECT_URL,
});

try {
  await client.connect();
  console.log("✅ Connected!");

  const result = await client.query("SELECT NOW()");
  console.log(result.rows);

  await client.end();
} catch (err) {
  console.error(err);
}
