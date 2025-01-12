import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Peticion } from "@prisma/client";
export default function PeticionesCard({ peticion }: { peticion: Peticion }) {
  return (
    <Card className="py-3 my-3">
      <CardHeader>
        <h2>{peticion.id}</h2>
        <h2>{peticion.title}</h2>
      </CardHeader>
      <CardBody>
        <p>{peticion.content}</p>
      </CardBody>
    </Card>
  );
}
