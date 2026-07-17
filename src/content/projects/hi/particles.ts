import videoParticles from "../../../assets/videos/particles.mp4";

import particles0 from "../../../assets/images/projects/particles/particles-0.webp";
import particles1 from "../../../assets/images/projects/particles/particles-1.webp";
import particles2 from "../../../assets/images/projects/particles/particles-2.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "GJS Image",
  theme: "dark",
  tags: ["javascript"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/GJS-image",
  description: "GJS-image — इमेज उपयोगिताएँ और डेमो। विवरण के लिए रिपॉजिटरी देखें।",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoParticles,
        caption: "एनिमेटेड पार्टिकल सिस्टम",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles0,
        alt: "Knot Shape",
        caption: "नॉट शेप",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles1,
        alt: "Donut Shape",
        caption: "डोनट शेप",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: particles2,
        alt: "Sphere Shape",
        caption: "स्फेयर शेप",
      },
    },
  ],
} as const satisfies ProjectContent;
