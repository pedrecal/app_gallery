import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "./schema";

// TODO: Learn why did i have to disable these rules
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql, { schema });