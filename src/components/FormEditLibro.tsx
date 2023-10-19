"use client";
import React, { use } from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter, useParams } from "next/navigation";

export function FormEditLibro({ materialId }: { materialId: number }) {
  const [materialLibro, setMaterialLibro] = useState({
    idioma: 1,
    anio: 2000,
    mes: 1,
    titulo: "",
    cantidad_paginas: 0,
    cantidad_CDs: 0,
    isbn10: "",
    isbn13: "",
    editorial: "",
    edicion: 1,
    escuela: 0,
  });

  const form: any = useRef(null);
  const router: any = useRouter();
  const params: any = useParams();

  useEffect(() => {
    if (params.id) {
      axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/material/libro/${materialId}`)
        .then((res) => {
          setMaterialLibro({
            idioma: res.data.idIdioma,
            anio: res.data.anioPublicacion,
            mes: res.data.mes,
            titulo: res.data.titulo,
            cantidad_paginas: res.data.cantidadPaginas,
            cantidad_CDs: res.data.cantidadCDs,
            isbn10: res.data.isbn10,
            isbn13: res.data.isbn13,
            editorial: res.data.editorial,
            edicion: res.data.edicion,
            escuela: res.data.idEscuela,
          });
        });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaterialLibro({
      ...materialLibro,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/material/libro/${params.id}`,
      materialLibro
    );
    console.log(result);
    form.current.reset();
    router.refresh();
    router.push("/biblioteca");
  };

  return (
    <form
      onSubmit={handlerSubmit}
      className="bg-white shadow-md rounded-md px-8 pt-6 pb-6 mb-4"
      ref={form}
    >
      <label
        htmlFor="titulo"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Titulo
      </label>
      <input
        name="titulo"
        type="text"
        placeholder="Titulo"
        value={materialLibro.titulo}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="idioma"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Idioma
      </label>
      <input
        name="idioma"
        type="text"
        placeholder="Idioma"
        value={materialLibro.idioma}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="anio"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Año
      </label>
      <input
        name="anio"
        type="text"
        placeholder="Año"
        value={materialLibro.anio}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="mes"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Mes
      </label>
      <input
        name="mes"
        type="text"
        placeholder="Mes"
        value={materialLibro.mes}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="cantidad_paginas"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Cantidad de paginas
      </label>
      <input
        name="cantidad_paginas"
        type="text"
        placeholder="Cantidad de paginas"
        value={materialLibro.cantidad_paginas}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="cantidad_CDs"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Cantidad de CDs
      </label>
      <input
        name="cantidad_CDs"
        type="text"
        placeholder="Cantidad de CDs"
        value={materialLibro.cantidad_CDs}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="isbn10"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        ISBN10
      </label>
      <input
        name="isbn10"
        type="text"
        placeholder="ISBN10"
        value={materialLibro.isbn10}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="isbn13"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        ISBN13
      </label>
      <input
        name="isbn13"
        type="text"
        placeholder="ISBN13"
        value={materialLibro.isbn13}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="editorial"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Editorial
      </label>
      <input
        name="editorial"
        type="text"
        placeholder="Editorial"
        value={materialLibro.editorial}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="edicion"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Edicion
      </label>
      <input
        name="edicion"
        type="text"
        placeholder="Edicion"
        value={materialLibro.edicion}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <label
        htmlFor="escuela"
        className="block text-gray-700 text-sm font-bold mb-2"
      >
        Escuela
      </label>
      <input
        name="escuela"
        type="text"
        placeholder="Escuela"
        value={materialLibro.escuela}
        onChange={handleChange}
        className="shadow appearance-none border rounded w-full py-2 px-3"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Guardar
      </button>
    </form>
  );
}
