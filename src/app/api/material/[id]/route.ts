import { NextResponse } from "next/server";
import { executeQuery } from "@/utils/database";

export async function GET(request: Request, { params }: any) {
  try {
    const result: any = await executeQuery({
      query: `SELECT * FROM biblioteca WHERE ID = ?`,
      values: [params.id],
    });
    if (result.length === 0) {
      return NextResponse.json(
        { message: "No se encontró el material" },
        { status: 404 }
      );
    }
    return NextResponse.json(result[0]);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: any) {
  try {
    const result: any = await executeQuery({
      query: `
      UPDATE material_bibliografico
      SET visibMB = 0
      WHERE idMaterial = ?
      `,
      values: [params.id],
    });
    if (result.affectedRows === 0) {
      return NextResponse.json(
        { message: "No se encontró el material" },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: "Material eliminado (No Visible)" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ mensage: error }, { status: 500 });
  }
}
