import { NextResponse } from "next/server";
import { executeQuery } from "@/utils/database";

export async function GET() {
  const result: any = await executeQuery({
    query: `
    SELECT NOW()`,
  });
  return NextResponse.json({ message: result[0]["NOW()"] });
}
