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
  tags: ["javascript"],
  source: "https://github.com/Jigar-kar/chat-app",
  description:
    "Chatting app in Flutter — mobile Chat-Anwendung. Details im Repository.",
  components: [
    {
      type: "media",
      props: {
        type: "video",
        src: videoSharkie,
        caption: "Gameplay",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie0,
        alt: "Spielfiguren und Karten-Design",
        caption: "Spielfiguren und Karten-Design",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie1,
        alt: "Boss-Kampf",
        caption: "Boss-Kampf",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie2,
        alt: "Mission",
        caption: "Mission",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie3,
        alt: "Sieg-Screen",
        caption: "Sieg-Screen",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: sharkie4,
        alt: "Todes-Screen",
        caption: "Todes-Screen",
      },
    },
  ],
} as const satisfies ProjectContent;
