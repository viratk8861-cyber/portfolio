import thumbnailFineTrack from "../../../assets/thumbnails/fine-track.png";
import thumbnailMyPortfolio from "../../../assets/thumbnails/my-portfolio.png";
import thumbnailShopifyListing from "../../../assets/thumbnails/shopify-listing.png";
import thumbnailServerTycoon from "../../../assets/thumbnails/server-tycoon.png";
import thumbnailCollegeApp from "../../../assets/thumbnails/college-app.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "Fine Track",
    slug: "fine-track",
    thumbnail: thumbnailFineTrack,
    description: "व्यक्तिगत वित्त और बजट ट्रैकर ऐप",
  },
  {
    title: "My Portfolio",
    slug: "my-portfolio",
    thumbnail: thumbnailMyPortfolio,
    description: "व्यक्तिगत रिस्पॉन्सिव पोर्टफोलियो वेबसाइट",
  },
  {
    title: "Shopify Listing",
    slug: "shopify-listing",
    thumbnail: thumbnailShopifyListing,
    description: "शॉपिफ़ाई उत्पाद सूची और पूर्वावलोकन प्रबंधक",
  },
  {
    title: "Server Tycoon",
    slug: "server-tycoon",
    thumbnail: thumbnailServerTycoon,
    description: "सर्वर प्रबंधन सिमुलेशन डैशबोर्ड",
  },
  {
    title: "College App",
    slug: "college-app",
    thumbnail: thumbnailCollegeApp,
    description: "ईआरपी-शैली शैक्षिक पाठ्यक्रम और छात्र प्रबंधक",
  },
] as const satisfies ProjectPreview[];
