import thumbnailCubeWar from "../../../assets/thumbnails/cubewar.webp";
import thumbnailQuibbo from "../../../assets/thumbnails/quibbo.webp";
//import thumbnailParticles from "../../../assets/thumbnails/particles.webp";
import thumbnailPokedex from "../../../assets/thumbnails/pokedex.webp";
import thumbnailSharkie from "../../../assets/thumbnails/sharkie.webp";
import thumbnailStreakon from "../../../assets/thumbnails/streakon.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "StreakOn",
    slug: "streakon",
    thumbnail: thumbnailStreakon,
    description: "App für tägliche Gewohnheiten",
  },
  {
    title: "Routino",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Routing-Utility und Demos",
  },
  {
    title: "College App",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Beispiel-App zur Kursverwaltung",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D-Abenteuerspiel",
  },
  /**  {
    title: "WebGL Partikel",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamische 3D Partikel",
  }, */
  {
    title: "Movements",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Animation- und Interaktions-Demos",
  },
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
