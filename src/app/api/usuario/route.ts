import { NextResponse } from "next/server";

export function GET() {
  try {
    return NextResponse.json({ message: "Obtener Todo" });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export function POST() {
  try {
    return NextResponse.json({ message: "Insertar Nuevo" });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
