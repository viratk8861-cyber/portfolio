import screenshot from "../../../assets/images/projects/fine-track/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Fine Track",
  theme: "dark",
  tags: ["dart", "flutter"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/fine-track",
  description:
    "फाइन ट्रैक — व्यक्तिगत वित्त और व्यय ट्रैकिंग एप्लिकेशन। अपने बजट का प्रबंधन करें और खर्चों को आसानी से ट्रैक करें।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Budget Overview",
        caption: "बजट अवलोकन और व्यय विश्लेषण डैशबोर्ड",
      },
    },
  ],
} as const satisfies ProjectContent;
