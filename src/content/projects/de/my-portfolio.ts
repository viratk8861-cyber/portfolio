import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

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
        src: pokedex0,
        alt: "Hero-Bereich",
        caption: "Hero-Bereich",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Projektraster",
        caption: "Projektraster",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Kontaktformular",
        caption: "Kontaktformular",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Mobile Ansicht",
        caption: "Mobile Ansicht",
      },
    },
  ],
} as const satisfies ProjectContent;
