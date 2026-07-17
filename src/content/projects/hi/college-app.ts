import screenshot from "../../../assets/images/projects/college-app/screenshot.png";

import type { ProjectContent } from "../../types";

export default {
  title: "College App",
  theme: "light",
  tags: ["dart", "flutter"],
  videoBorder: true,
  source: "https://github.com/Jigar-kar/college-app",
  description:
    "कॉलेज ऐप — स्कूल और कॉलेज प्रबंधन के लिए डिज़ाइन किया गया एक ईआरपी-शैली का मोबाइल एप्लिकेशन, जो पाठ्यक्रमों, कक्षाओं, छात्रों के समय-सारणी और उपस्थिति ट्रैकिंग की सुविधा प्रदान करता है।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "College App Dashboard",
        caption: "ईआरपी डैशबोर्ड व्यू",
      },
    },
  ],
} as const satisfies ProjectContent;
