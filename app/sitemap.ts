import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://20recolher.pt";
  const routes = [
    "",
    "/sobre",
    "/servicos",
    "/clientes",
    "/sustentabilidade",
    "/contactos",
    "/pedido-recolha",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
