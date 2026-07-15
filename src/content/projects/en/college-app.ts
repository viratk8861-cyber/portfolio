import screenshot from "../../../assets/images/projects/college-app/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "College App",
  theme: "light",
  tags: ["dart", "flutter"],
  videoBorder: true,
  source: "https://github.com/Jigar-kar/college-app",
  description:
    "College App — An ERP-style mobile application designed for school and college management, facilitating courses, classes, student schedules, and attendance tracking.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "College App Dashboard",
        caption: "ERP Dashboard View",
      },
    },
  ],
} as const satisfies ProjectContent;
