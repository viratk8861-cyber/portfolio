import screenshot from "../../../assets/images/projects/server-tycoon/screenshot.png";

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
        src: screenshot,
        alt: "Haupt-Dashboard",
        caption: "Haupt-Dashboard mit CPU-/Bandbreiten-Metriken und Ereignisprotokoll-Terminal",
      },
    },
  ],
} as const satisfies ProjectContent;
