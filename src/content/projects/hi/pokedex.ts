import videoPokedex from "../../../assets/videos/pokedex.mp4";

import pokedex0 from "../../../assets/images/projects/pokedex/pokedex-0.webp";
import pokedex1 from "../../../assets/images/projects/pokedex/pokedex-1.webp";
import pokedex2 from "../../../assets/images/projects/pokedex/pokedex-2.webp";
import pokedex3 from "../../../assets/images/projects/pokedex/pokedex-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Pokédex",
  theme: "light",
  tags: ["dart"],
  source: "https://github.com/Jigar-kar/movements",
  videoBorder: true,
  description:
    "मूवमेंट्स — एनीमेशन और इंटरैक्शन डेमो। उदाहरण और स्रोत के लिए रिपॉजिटरी देखें।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoPokedex,
        caption: "पोकेडेक्स ऐप",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex0,
        alt: "Default View",
        caption: "डिफ़ॉल्ट व्यू",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex1,
        alt: "Search Function",
        caption: "खोज फ़ंक्शन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex2,
        alt: "Responsive Design",
        caption: "रिस्पॉन्सिव डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: pokedex3,
        alt: "Lazy Loading",
        caption: "लेज़ी लोडिंग",
      },
    },
  ],
} as const satisfies ProjectContent;
