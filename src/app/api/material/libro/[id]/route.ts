import { NextResponse } from "next/server";
import { executeQuery } from "@/utils/database";

export async function PUT(request: Request, { params }: any) {
  try {
    const data: any = await request.json();
    const result: any = await executeQuery({
      query: `
      UPDATE material_bibliografico SET idIdioma = ?, anioPublicacion = ?, mes = ?, titulo = ?, cantidadPaginas = ?, cantidadCDs = ?, idEscuela = ? WHERE idMaterial = ?`,
      values: [
        data.idioma,
        data.anio,
        data.mes,
        data.titulo,
        data.cantidad_paginas,
        data.cantidad_CDs,
        data.escuela,
        params.id,
      ],
    });

    const result1: any = await executeQuery({
      query: `
      UPDATE libro SET isbn10 = ?, isbn13 = ?, editorial = ?, edicion = ? WHERE idMaterial = ?`,
      values: [
        data.isbn10,
        data.isbn13,
        data.editorial,
        data.edicion,
        params.id,
      ],
    });

    if (result.affectedRows === 0 && result1.affectedRows === 0) {
      return NextResponse.json(
        { message: "No se encontró el material" },
        { status: 404 }
      );
    }

    const result2: any = await executeQuery({
      query: `
      SELECT * FROM biblioteca WHERE ID = ?`,
      values: [params.id],
    });

    return NextResponse.json(result2[0]);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}

export async function GET(request: Request, { params }: any) {
  try {
    const result: any = await executeQuery({
      query: `SELECT idIdioma, anioPublicacion, mes, titulo, cantidadPaginas, cantidadCDs, idEscuela FROM material_bibliografico WHERE idMaterial = ?`,
      values: [params.id],
    });
    const result1: any = await executeQuery({
      query: `SELECT isbn10, isbn13, editorial, edicion FROM libro WHERE idMaterial = ?`,
      values: [params.id],
    });
    if (result.length === 0 && result1.length === 0) {
      return NextResponse.json(
        { message: "No se encontró el material" },
        { status: 404 }
      );
    }
    return NextResponse.json({
      ...result[0],
      ...result1[0],
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
