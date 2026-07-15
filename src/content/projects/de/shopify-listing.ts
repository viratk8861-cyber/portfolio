import quibbo0 from "../../../assets/images/projects/quibbo/quibbo-0.webp";
import quibbo1 from "../../../assets/images/projects/quibbo/quibbo-1.webp";
import quibbo2 from "../../../assets/images/projects/quibbo/quibbo-2.webp";
import quibbo3 from "../../../assets/images/projects/quibbo/quibbo-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Shopify Listing",
  theme: "light",
  tags: ["html", "css", "javascript"],
  videoBorder: true,
  live: "https://shopify-listing.vercel.app",
  source: "https://github.com/Jigar-kar/Shopify-Listing",
  description:
    "Shopify Produkt-Listing-Tool — Einfache HTML, CSS und JS Webanwendung zur mühelosen Auflistung und Vorschau von Produkten für die Shopify-Integration.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Produktformular",
        caption: "Produkteingabeformular",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Bulk-Listing-Editor",
        caption: "Bulk-Listing-Editor",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Varianten-Auswahl",
        caption: "Variantenanpassung",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Live-Vorschau",
        caption: "Shopify Live-Synchronisations-Vorschau",
      },
    },
  ],
} as const satisfies ProjectContent;
