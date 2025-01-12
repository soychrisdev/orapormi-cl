import { Button } from "@nextui-org/button";
import { Form } from "@nextui-org/form";
import { Input, Textarea } from "@nextui-org/input";

import { db } from "@/lib/db";

export default async function Page() {
  const onSubmit = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      content: formData.get("peticion"),
      nombre: formData.get("nombre"),
    };

    await db.peticion.create({
      data: {
        content: rawFormData.content as string,
        title: rawFormData.nombre as string,
        authorId: "",
      },
    });
  };

  return (
    <Form action={onSubmit} validationBehavior="native">
      <Input
        isRequired
        errorMessage="No ingresaste tu nombre"
        label="Nombre"
        labelPlacement="outside"
        name="nombre"
        placeholder="Ingrese su nombre..."
        type="text"
      />
      <Textarea
        isRequired
        errorMessage="Favor ingrese una petición."
        label="peticion"
        labelPlacement="outside"
        name="peticion"
        placeholder="Ingrese su petición de oración..."
        type="string"
      />
      <Button type="submit">Submit</Button>
    </Form>
  );
}
