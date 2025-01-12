import PeticionesCard from "./_components/card/peticiones-card";
import PaginationComponent from "./_components/pagination/peticiones-paginador";

import { db } from "@/lib/db"; // Asegúrate de que esto sea accesible

// Esta es una función asíncrona que se ejecutará en el servidor
export default async function Page({ searchParams }) {
  const resultsPerPage = 3;
  const currentPage = parseInt(searchParams.page) || 1; // Página actual desde los parámetros de la URL
  const skip = (currentPage - 1) * resultsPerPage;

  // Obtener las peticiones de la base de datos
  const peticiones = await db.peticion.findMany({
    skip,
    take: resultsPerPage,
    orderBy: { id: "desc" },
  });

  // Obtener el total de peticiones para la paginación
  const totalPeticiones = await db.peticion.count();

  return (
    <div>
      {/* Renderiza las peticiones obtenidas */}
      {peticiones.map((peticion) => (
        <PeticionesCard key={peticion.id} peticion={peticion} />
      ))}

      {/* Paginación */}
      <PaginationComponent
        currentPage={currentPage}
        total={Math.round(totalPeticiones / resultsPerPage)}
      />
    </div>
  );
}
