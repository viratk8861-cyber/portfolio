import screenshot from "../../../assets/images/projects/fine-track/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Fine Track",
  theme: "dark",
  tags: ["dart", "flutter"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/fine-track",
  description:
    "Fine Track — personal finance and expense tracking application. Manage your budget and track expenses easily.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Budget Overview",
        caption: "Budget Overview and Spending Analytics Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
