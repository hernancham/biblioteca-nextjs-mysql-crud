import { NextResponse } from "next/server";

export function GET(request: Request, { params }: any) {
  try {
    return NextResponse.json({ message: "Obtener Uno" });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export function PUT(request: Request, { params }: any) {
  try {
    return NextResponse.json({ message: "Actualizar Uno" });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export function DELETE(request: Request, { params }: any) {
  try {
    return NextResponse.json({ message: "Eliminar Uno" });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
