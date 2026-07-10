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
    description: "Social habit tracking app",
  },
  {
    title: "Routino",
    slug: "cubewar",
    thumbnail: thumbnailCubeWar,
    description: "Routing utility and demos",
  },
  {
    title: "College App",
    slug: "quibbo",
    thumbnail: thumbnailQuibbo,
    description: "Educational course management app",
  },
  {
    title: "Sharkie",
    slug: "sharkie",
    thumbnail: thumbnailSharkie,
    description: "2D adventure game",
  },
  /**  {
    title: "WebGL Particles",
    slug: "particles",
    thumbnail: thumbnailParticles,
    description: "Dynamic 3D particles",
  }, */
  {
    title: "Movements",
    slug: "pokedex",
    thumbnail: thumbnailPokedex,
    description: "Animation & interaction demos",
  },
] as const satisfies ProjectPreview[];
