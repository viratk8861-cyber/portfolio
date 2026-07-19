import videoSharkie from "../../../assets/videos/sharkie.mp4";

import sharkie0 from "../../../assets/images/projects/sharkie/sharkie-0.webp";
import sharkie1 from "../../../assets/images/projects/sharkie/sharkie-1.webp";
import sharkie2 from "../../../assets/images/projects/sharkie/sharkie-2.webp";
import sharkie3 from "../../../assets/images/projects/sharkie/sharkie-3.webp";
import sharkie4 from "../../../assets/images/projects/sharkie/sharkie-4.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Chat App (Flutter)",
  theme: "light",
  tags: ["dart", "flutter"],
  source: "https://github.com/Jigar-kar/chat-app",
  description:
    "फ़्लटर में निर्मित चैट ऐप — मोबाइल चैट एप्लिकेशन का उदाहरण। कार्यान्वयन विवरण के लिए रिपॉजिटरी देखें।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "गेमप्ले",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Entities And Map Design",
        caption: "एंटिटीज और मैप डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Boss Fight",
        caption: "बॉस फाइट",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Mission",
        caption: "मिशन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "Victory Screen",
        caption: "जीत की स्क्रीन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Death Screen",
        caption: "डेथ स्क्रीन",
      },
    },
  ],
} as const satisfies ProjectContent;
