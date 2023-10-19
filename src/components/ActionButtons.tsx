"use client";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ActionButtons({ materialId }: { materialId: number }) {
  const router = useRouter();
  return (
    <div className="flex gap-x-2 justify-end mt-2">
      <button
        className="text-white bg-red-500 hover:bg-red-700 py-2 px-3 rounded"
        onClick={async () => {
          if (confirm("¿Estás seguro de eliminar este material?")) {
            const result = await axios.delete(
              `${process.env.NEXT_PUBLIC_API_URL}/material/${materialId}`
            );
            if (result.status === 200) {
              router.push("/biblioteca");
            }
          }
        }}
      >
        Eliminar
      </button>
      <button
        className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-3 rounded"
        onClick={() => router.push(`/biblioteca/edit/${materialId}`)}
      >
        Editar
      </button>
    </div>
  );
}
