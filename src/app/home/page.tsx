import logo_esis from "@/public/images/Esis_logo.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      <h1 className="text-white text-center text-4xl p-5">
        BIBLIOTECA ESPECIALIZADA DE LA ESIS
      </h1>
      <div className="flex justify-center items-center h-screen">
        <Image src={logo_esis} alt="Hernan Perfil" width={500} height={500} />
      </div>
    </>
  );
}
