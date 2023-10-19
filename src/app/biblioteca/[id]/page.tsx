import ActionButtons from "@/components/ActionButtons";
import axios from "axios";

async function getMaterial(MaterialId: number) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/material/${MaterialId}`
  );
  return data;
}

export default async function MaterialPage({ params }: any) {
  const material: any = await getMaterial(params.id);
  return (
    <section className="flex justify-center items-center">
      <div className="p-6 bg-white rounded-md">
        <p>Titulo: {material["Título"]}</p>
        <p>Tipo: {material.Tipo}</p>
        <p>Idioma: {material.Idioma}</p>
        <p>Temas: {material.Temas}</p>
        <p>Contribuyentes: {material.Contribuyentes}</p>
        <p>N Paginas: {material["Páginas"]}</p>
        <p>Año: {material["Año"]}</p>
        <ActionButtons materialId={material.ID} />
      </div>
    </section>
  );
}
