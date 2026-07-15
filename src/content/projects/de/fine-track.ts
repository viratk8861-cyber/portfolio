import streakon0 from "../../../assets/images/projects/streakon/streakon-0.webp";
import streakon1 from "../../../assets/images/projects/streakon/streakon-1.webp";
import streakon2 from "../../../assets/images/projects/streakon/streakon-2.webp";
import streakon3 from "../../../assets/images/projects/streakon/streakon-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Fine Track",
  theme: "dark",
  tags: ["dart", "flutter"],
  videoBorder: false,
  source: "https://github.com/Jigar-kar/fine-track",
  description:
    "Fine Track — Anwendung zur persönlichen Finanz- und Ausgabenverwaltung. Verwalten Sie Ihr Budget und verfolgen Sie Ihre Ausgaben.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Budget-Übersicht",
        caption: "Budget-Übersicht",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Ausgabenanalyse",
        caption: "Ausgabenanalyse",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Transaktionsverlauf",
        caption: "Transaktionsverlauf",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Kategorie-Einstellungen",
        caption: "Kategorie-Einstellungen",
      },
    },
  ],
} as const satisfies ProjectContent;
