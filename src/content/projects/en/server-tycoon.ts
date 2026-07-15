import screenshot from "../../../assets/images/projects/server-tycoon/screenshot.png";

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
        src: screenshot,
        alt: "Main Dashboard",
        caption: "Main Dashboard showing CPU/bandwidth tracking metrics and event log terminal",
      },
    },
  ],
} as const satisfies ProjectContent;
