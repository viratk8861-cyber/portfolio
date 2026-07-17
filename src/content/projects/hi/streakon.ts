import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Resume / Portfolio",
  theme: "dark",
  tags: ["javascript", "html", "css"],
  videoBorder: false,
  live: "https://portfolio-jigar.vercel.app",
  source: "https://github.com/Jigar-kar/resume",
  description:
    "व्यक्तिगत बायोडाटा और पोर्टफोलियो साइट। लाइव डेमो उपलब्ध है और गिटहब पर सोर्स उपलब्ध है।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Solo and group streaks",
        caption: "सोलो और ग्रुप स्ट्रीक्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Streak progress",
        caption: "स्ट्रीक प्रगति",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Cheer for friends",
        caption: "दोस्तों के लिए चीयर करें",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Invite Flow",
        caption: "इनवाइट फ्लो",
      },
    },
  ],
} as const satisfies ProjectContent;
