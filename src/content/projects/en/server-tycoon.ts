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
    "Server Tycoon — A server management simulation game and network operations dashboard built with JavaScript and Node.js.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Main Dashboard",
        caption: "Main Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Server Upgrades",
        caption: "Server Upgrades Panel",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Incident Log",
        caption: "Real-time Incident Log",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "System Statistics",
        caption: "System resource and bandwidth statistics",
      },
    },
  ],
} as const satisfies ProjectContent;
