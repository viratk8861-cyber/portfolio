import videoCubeWar from "../../../assets/videos/cubewar.mp4";

import cubewar0 from "../../../assets/images/projects/cubewar/cubewar-0.webp";
import cubewar1 from "../../../assets/images/projects/cubewar/cubewar-1.webp";
import cubewar2 from "../../../assets/images/projects/cubewar/cubewar-2.webp";
import cubewar3 from "../../../assets/images/projects/cubewar/cubewar-3.webp";
import cubewar4 from "../../../assets/images/projects/cubewar/cubewar-4.webp";
import cubewar5 from "../../../assets/images/projects/cubewar/cubewar-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Routino",
  theme: "dark",
  tags: ["dart"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/Routino",
  description:
    "रूटीनो — एक छोटा राउटिंग यूटिलिटी और डेमो प्रोजेक्ट। उदाहरण और उपयोग के लिए रिपॉजिटरी देखें।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoCubeWar,
        caption: "गेमप्ले",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar0,
        alt: "Tutorial",
        caption: "ट्यूटोरियल",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar1,
        alt: "Maps Themes",
        caption: "मैप थीम्स",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar2,
        alt: "Authentication",
        caption: "प्रमाणीकरण",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar3,
        alt: "Responsive Design",
        caption: "रिस्पॉन्सिव डिज़ाइन",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar4,
        alt: "Multiple Gamemodes",
        caption: "विभिन्न गेममोड",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: cubewar5,
        alt: "Party System",
        caption: "पार्टी सिस्टम",
      },
    },
  ],
} as const satisfies ProjectContent;
