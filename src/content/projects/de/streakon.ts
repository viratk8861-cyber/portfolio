import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Resume / Portfolio",
  theme: "dark",
  tags: ["javascript"],
  videoBorder: false,
  live: "https://portfolio-jigar.vercel.app",
  source: "https://github.com/Jigar-kar/resume",
  description:
    "Persönliche Resume- und Portfolioseite. Demo online, Quellcode auf GitHub.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Solo- und Gruppen-Streaks",
        caption: "Solo- und Gruppen-Streaks",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Streak-Fortschritt",
        caption: "Streak-Fortschritt",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Freunde anfeuern",
        caption: "Freunde anfeuern",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Einladungs-Flow",
        caption: "Einladungs-Flow",
      },
    },
  ],
} as const satisfies ProjectContent;
