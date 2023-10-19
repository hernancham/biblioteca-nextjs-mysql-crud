import { exec } from "child_process";
import { NextResponse } from "next/server";
import { executeQuery } from "@/utils/database";

export async function GET() {
  try {
    const result: any = await executeQuery({
      query: `
      SELECT * FROM biblioteca`,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
