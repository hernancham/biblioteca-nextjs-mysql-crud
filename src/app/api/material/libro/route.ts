import { NextResponse } from "next/server";
import { executeQuery } from "@/utils/database";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const result: any = await executeQuery({
      query: `INSERT INTO Material_Bibliografico (idTipo, idIdioma, anioPublicacion, mes, titulo, cantidadPaginas, cantidadCDs, cantidadEjemplares, idEscuela) VALUES (?,?,?,?,?,?,?,?,?)`,
      values: [
        1,
        data.idioma,
        data.anio,
        data.mes,
        data.titulo,
        data.cantidad_paginas,
        data.cantidad_CDs,
        data.n_ejemplares,
        data.escuela,
      ],
    });

    await executeQuery({
      query: `INSERT INTO Libro (isbn10, isbn13, editorial, edicion, idMaterial) VALUES (?,?,?,?,?)`,
      values: [
        data.isbn10,
        data.isbn13,
        data.editorial,
        data.edicion,
        result.insertId,
      ],
    });

    for (let i = 0; i < data.n_ejemplares; i++) {
      await executeQuery({
        query: `INSERT INTO Ejemplar(idMaterial, disponibilidad, idEstado)
        VALUES (?,?,?)`,
        values: [result.insertId, 1, 1],
      });
    }

    await executeQuery({
      query: `CALL Insertar_Tema_Contenido(?,?);`,
      values: [data.temas, result.insertId],
    });

    //console.log(result);
    return NextResponse.json({
      id: result.insertId,
      n_ejemplares: data.n_ejemplares,
      idioma: data.idioma,
      anio: data.anio,
      mes: data.mes,
      titulo: data.titulo,
      cantidad_paginas: data.cantidad_paginas,
      cantidad_CDs: data.cantidad_CDs,
      isbn10: data.isbn10,
      isbn13: data.isbn13,
      editorial: data.editorial,
      edicion: data.edicion,
      escuela: data.escuela,
      temas: data.temas,
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
