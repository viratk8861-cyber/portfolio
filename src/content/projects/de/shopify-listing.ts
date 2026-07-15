import screenshot from "../../../assets/images/projects/shopify-listing/screenshot.png";

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
        src: screenshot,
        alt: "Produktformular",
        caption: "Shopify Produktdetailformular und Live-Vorschaubereich für Einträge",
      },
    },
  ],
} as const satisfies ProjectContent;
