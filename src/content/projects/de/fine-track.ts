import screenshot from "../../../assets/images/projects/fine-track/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Fine Track",
  theme: "dark",
  tags: ["dart", "flutter"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/fine-track",
  description:
    "Fine Track — Anwendung zur persönlichen Finanz- und Ausgabenverwaltung. Verwalten Sie Ihr Budget und verfolgen Sie Ihre Ausgaben.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Budget-Übersicht",
        caption: "Budget-Übersicht und Ausgabenanalyse-Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
