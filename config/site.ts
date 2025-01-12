export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "ORA POR MI",
  description:
    "Comparte tus peticiones de oración y ora por las peticiones de los demás.",
  navItems: [
    {
      label: "Inicio",
      href: "/",
    },
    {
      label: "Crear petición",
      href: "/peticion",
    },
    {
      label: "Orar por peticiones",
      href: "/oracion",
    },
  ],
  navMenuItems: [],
  links: {
    // github: "https://github.com/nextui-org/nextui",
    // twitter: "https://twitter.com/getnextui",
    // docs: "https://nextui.org",
    // discord: "https://discord.gg/9b6yyZKmH4",
    // sponsor: "https://patreon.com/jrgarciadev",
  },
};
