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
    description: "Personal finance and budget tracker app",
  },
  {
    title: "My Portfolio",
    slug: "my-portfolio",
    thumbnail: thumbnailPokedex,
    description: "Personal responsive portfolio website",
  },
  {
    title: "Shopify Listing",
    slug: "shopify-listing",
    thumbnail: thumbnailQuibbo,
    description: "Shopify product listing & preview manager",
  },
  {
    title: "Server Tycoon",
    slug: "server-tycoon",
    thumbnail: thumbnailCubeWar,
    description: "Server management simulation dashboard",
  },
] as const satisfies ProjectPreview[];
