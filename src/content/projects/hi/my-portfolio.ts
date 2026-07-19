import screenshot from "../../../assets/images/projects/my-portfolio/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "My Portfolio",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: true,
  source: "https://github.com/Jigar-kar/my-portfolio",
  description:
    "मेरा पोर्टफोलियो — व्यक्तिगत रिस्पॉन्सिव वेबसाइट जो सीमेंटिक HTML, CSS और बेसिक जावास्क्रिप्ट के साथ बनाए गए कार्यों, कौशल और संपर्क विवरण को प्रदर्शित करती है।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Hero Section",
        caption: "मुख्य लैंडिंग व्यू और प्रोजेक्ट्स ग्रिड शोकेस",
      },
    },
  ],
} as const satisfies ProjectContent;
