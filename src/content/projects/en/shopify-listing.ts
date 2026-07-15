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
    "Shopify Product Listing Tool — Simple HTML, CSS, and JS web app to easily list and preview products for Shopify integration.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Product Form",
        caption: "Shopify Product Details Form and Listing Live Preview Panel",
      },
    },
  ],
} as const satisfies ProjectContent;
