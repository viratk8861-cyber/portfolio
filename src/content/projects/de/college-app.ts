import screenshot from "../../../assets/images/projects/college-app/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "College App",
  theme: "light",
  tags: ["dart", "flutter"],
  videoBorder: true,
  source: "https://github.com/Jigar-kar/college-app",
  description:
    "College App — Eine mobile ERP-Anwendung für das Schul- und Hochschulmanagement zur Verwaltung von Kursen, Stundenplänen, Studenten und Anwesenheiten.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "College App Dashboard",
        caption: "ERP Dashboard-Ansicht",
      },
    },
  ],
} as const satisfies ProjectContent;
