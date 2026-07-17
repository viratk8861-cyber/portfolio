import screenshot from "../../../assets/images/projects/server-tycoon/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Server Tycoon",
  theme: "dark",
  tags: ["javascript", "node"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/server-tycoon",
  description:
    "सर्वर टाइकून — जावास्क्रिप्ट और Node.js के साथ बनाया गया एक सर्वर प्रबंधन सिमुलेशन गेम और नेटवर्क संचालन डैशबोर्ड।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Main Dashboard",
        caption: "सीपीयू/बैंडविड्थ ट्रैकिंग मेट्रिक्स और इवेंट लॉग टर्मिनल दिखाने वाला मुख्य डैशबोर्ड",
      },
    },
  ],
} as const satisfies ProjectContent;
