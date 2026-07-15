import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Fine Track",
    slug: "fine-track",
    thumbnail: thumbnailStreakon,
    description: "App zur persönlichen Finanz- und Budgetverwaltung",
  },
  {
    title: "My Portfolio",
    slug: "my-portfolio",
    thumbnail: thumbnailPokedex,
    description: "Persönliche responsive Portfolio-Website",
  },
  {
    title: "Shopify Listing",
    slug: "shopify-listing",
    thumbnail: thumbnailQuibbo,
    description: "Shopify-Produktauflistung & Vorschau-Manager",
  },
  {
    title: "Server Tycoon",
    slug: "server-tycoon",
    thumbnail: thumbnailCubeWar,
    description: "Simulations-Dashboard zur Serververwaltung",
  },
] as const satisfies ProjectPreview[];
