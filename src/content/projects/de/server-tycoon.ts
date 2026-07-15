import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Server Tycoon",
  theme: "dark",
  tags: ["javascript", "node"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/server-tycoon",
  description:
    "Server Tycoon — Ein Server-Management-Simulationsspiel und Dashboard für Netzwerkoperationen, entwickelt mit JavaScript und Node.js.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Haupt-Dashboard",
        caption: "Haupt-Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Server-Upgrades",
        caption: "Server-Upgrade-Panel",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Ereignisprotokoll",
        caption: "Echtzeit-Ereignisprotokoll",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "System-Statistiken",
        caption: "Systemressourcen- und Bandbreitenstatistiken",
      },
    },
  ],
} as const satisfies ProjectContent;
