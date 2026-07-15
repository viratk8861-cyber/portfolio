import screenshot from "../../../assets/images/projects/my-portfolio/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "My Portfolio",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: true,
  source: "https://github.com/Jigar-kar/my-portfolio",
  description:
    "My Portfolio — persönliche responsive Website zur Präsentation von Projekten, Fähigkeiten und Kontaktdaten, entwickelt mit semantischem HTML, CSS und einfachem JavaScript.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Hero-Bereich",
        caption: "Haupt-Landingpage und Präsentation des Projektrasters",
      },
    },
  ],
} as const satisfies ProjectContent;
