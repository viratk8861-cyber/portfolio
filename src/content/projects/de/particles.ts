import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "GJS Image",
  theme: "dark",
  tags: ["javascript"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/GJS-image",
  description: "GJS-image — Bild-Utilities und Demos. Details im Repository.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "Animiertes Partikelsystem",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "Knoten Form",
        caption: "Knoten Form",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "Donut Form",
        caption: "Donut Form",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "Kugel Form",
        caption: "Kugel Form",
      },
    },
  ],
} as const satisfies ProjectContent;
