import videoQuibbo from "../../../assets/videos/quibbo.mp4";

import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";
import quibbo4 from "../../../assets/images/projects/quibbo/quibbo-4.webp";
import quibbo5 from "../../../assets/images/projects/quibbo/quibbo-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "College App",
  theme: "light",
  tags: ["dart", "flutter"],
  videoBorder: true,
  source: "https://github.com/Jigar-kar/college-app",
  description: "कॉलेज ऐप — पाठ्यक्रमों और छात्रों के प्रबंधन के लिए एक नमूना शैक्षिक अनुप्रयोग।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "उपयोगकर्ता अनुभव",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Avatar Creator",
        caption: "अवतार निर्माता",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Multiplayer Tic-Tac-Toe",
        caption: "मल्टीप्लेयर टिक-टैक-टो",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Multiple Mini-Games",
        caption: "विभिन्न मिनी-गेम्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Avatar Variations",
        caption: "अवतार विविधताएं",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Responsive Design",
        caption: "रिस्पॉन्सिव डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "Dark Mode",
        caption: "डार्क मोड",
      },
    },
  ],
} as const satisfies ProjectContent;
