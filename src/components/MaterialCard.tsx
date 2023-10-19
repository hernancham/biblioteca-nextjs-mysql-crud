import Link from "next/link";

export function MaterialCard({ material }: { material: any }) {
  return (
    <Link
      className="bg-white rounded-lg border-gray-800 mb-3 p-4 hover:bg-gray-200 hover:cursor-pointer"
      href={`/biblioteca/${material.ID}`}
    >
      <h1>{material.ID}</h1>
      <h1 className="text-lg font-bold">{material["Título"]}</h1>
      <p>{material.Tipo}</p>
      <p>{material.Idioma}</p>
      <p>{material.Temas}</p>
      <p>{material.Contribuyentes}</p>
      <p>{material["Páginas"]}</p>
      <p>{material["Año"]}</p>
    </Link>
  );
}
