import { FormEditLibro } from "@/components/FormEditLibro";

export default function NewPage({ params }: any) {
  return (
    <div className="flex justify-center items-center h-full">
      <FormEditLibro materialId={params.id} />
    </div>
  );
}
