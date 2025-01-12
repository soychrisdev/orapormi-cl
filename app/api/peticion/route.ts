import { db } from "@/lib/db";

export async function handler() {
  const res = await db.peticion.findMany();
  return Response.json({ res });
}
