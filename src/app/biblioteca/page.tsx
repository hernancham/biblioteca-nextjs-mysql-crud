import { MaterialCard } from "@/components/MaterialCard";
import { NavbarBiblioteca } from "@/components/NavbarBiblioteca";
import axios from "axios";

async function getMateriales() {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/material`
  );
  return data;
}

export default async function BibliotecaPage() {
  const materiales: any = await getMateriales();
  //console.log(materiales);

  return (
    <>
      <NavbarBiblioteca />

      <div className="grid gap-4 grid-cols-3">
        {materiales.map((material: any) => {
          return <MaterialCard key={material.ID} material={material} />;
        })}
      </div>
    </>
  );
}
