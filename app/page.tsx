import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { subtitle, title } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Haz tu&nbsp;</span>
        <span className={title({ color: "violet" })}>petición&nbsp;</span>
        <span className={title()}>u&nbsp;</span>
        <span className={title({ color: "blue" })}>oración&nbsp;</span>
        <br />
        <span className={title()}>y recibe la respuesta de Dios.</span>
        <div className={subtitle({ class: "mt-4" })}>
          Conecta con millones de personas que realizan sus peticiones de
          oración y también oran por otros en el espiritu alrededor de todo el
          mundo.
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          showAnchorIcon
          as={Link}
          className="bg-gradient-to-r from-[#FF1CF7] to-[#b249f8] rounded-full"
          color="primary"
          href="/peticion"
          variant="solid"
        >
          Petición
        </Button>
        <Button
          showAnchorIcon
          as={Link}
          className="bg-gradient-to-r from-[#5EA2EF] to-[#0072F5] rounded-full"
          color="primary"
          href="/oracion"
          variant="solid"
        >
          Oración
        </Button>
      </div>
    </section>
  );
}
