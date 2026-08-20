import { db, hasDatabaseUrl } from "@/db";
import { sql } from "drizzle-orm";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!hasDatabaseUrl) {
    return Response.json({
      ok: true,
      database: "not_configured",
      message: "Application is healthy; DATABASE_URL is not configured.",
    });
  }

  try {
    await db.execute(sql`select 1`);
    return Response.json({ ok: true, database: "connected" });
  } catch {
    return Response.json(
      { ok: true, database: "unavailable", message: "Application is healthy." },
      { status: 200 }
    );
  }
}
