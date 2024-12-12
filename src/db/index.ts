import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';

async function main() {
    const db = drizzle(sql)
}

main();