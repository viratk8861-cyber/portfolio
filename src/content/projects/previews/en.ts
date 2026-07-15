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
    description: "Personal finance and budget tracker app",
  },
  {
    title: "My Portfolio",
    slug: "my-portfolio",
    thumbnail: thumbnailMyPortfolio,
    description: "Personal responsive portfolio website",
  },
  {
    title: "Shopify Listing",
    slug: "shopify-listing",
    thumbnail: thumbnailShopifyListing,
    description: "Shopify product listing & preview manager",
  },
  {
    title: "Server Tycoon",
    slug: "server-tycoon",
    thumbnail: thumbnailServerTycoon,
    description: "Server management simulation dashboard",
  },
  {
    title: "College App",
    slug: "college-app",
    thumbnail: thumbnailCollegeApp,
    description: "ERP-style educational course and student manager",
  },
] as const satisfies ProjectPreview[];
