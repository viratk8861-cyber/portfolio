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
    "My Portfolio — personal responsive website showcasing work, skills, and contact details built with semantic HTML, CSS, and basic JavaScript.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Hero Section",
        caption: "Hero Section",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Projects Grid",
        caption: "Projects Grid",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Contact Form",
        caption: "Contact Form",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Mobile View",
        caption: "Mobile View",
      },
    },
  ],
} as const satisfies ProjectContent;
