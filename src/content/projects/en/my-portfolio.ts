import screenshot from "../../../assets/images/projects/my-portfolio/screenshot.png";

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
        src: screenshot,
        alt: "Hero Section",
        caption: "Main Landing View and Projects Grid Showcase",
      },
    },
  ],
} as const satisfies ProjectContent;
