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
    "शॉपिफ़ाई उत्पाद सूची उपकरण — शॉपिफ़ाई एकीकरण के लिए उत्पादों को आसानी से सूचीबद्ध और पूर्वावलोकन करने के लिए सरल HTML, CSS और JS वेब ऐप।",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: screenshot,
        alt: "Product Form",
        caption: "शॉपिफ़ाई उत्पाद विवरण फ़ॉर्म और सूची लाइव पूर्वावलोकन पैनल",
      },
    },
  ],
} as const satisfies ProjectContent;
