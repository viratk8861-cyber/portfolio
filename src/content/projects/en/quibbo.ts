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
  description: "College App — a sample educational application for managing courses and students.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoQuibbo,
        caption: "User Experience",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Avatar Creator",
        caption: "Avatar Creator",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Multiplayer Tic-Tac-Toe",
        caption: "Multiplayer Tic-Tac-Toe",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Multiple Mini-Games",
        caption: "Multiple Mini-Games",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Avatar Variations",
        caption: "Avatar Variations",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo4,
        alt: "Responsive Design",
        caption: "Responsive Design",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo5,
        alt: "Dark Mode",
        caption: "Dark Mode",
      },
    },
  ],
} as const satisfies ProjectContent;
