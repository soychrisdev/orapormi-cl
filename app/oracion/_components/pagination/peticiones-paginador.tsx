"use client";

import { Pagination } from "@nextui-org/pagination";
import { useRouter } from "next/navigation"; // Usamos next/navigation para el enrutamiento

export default function PaginationComponent({
  currentPage,
  total,
}: {
  currentPage: number;
  total: number;
}) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    // Actualizamos la URL sin recargar la página
    router.push(`?page=${page}`);
  };

  return (
    <Pagination
      showControls
      initialPage={currentPage} // La página actual
      total={total} // El número total de registros
      onChange={handlePageChange} // Manejar el cambio de página
    />
  );
}
