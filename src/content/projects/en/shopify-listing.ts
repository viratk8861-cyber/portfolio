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
    "Shopify Product Listing Tool — Simple HTML, CSS, and JS web app to easily list and preview products for Shopify integration.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo0,
        alt: "Product Form",
        caption: "Product Input Form",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo1,
        alt: "Bulk Listing Editor",
        caption: "Bulk Listing Editor",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo2,
        alt: "Variant Picker",
        caption: "Variant Customization",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: quibbo3,
        alt: "Live Preview",
        caption: "Shopify Live Sync Preview",
      },
    },
  ],
} as const satisfies ProjectContent;
