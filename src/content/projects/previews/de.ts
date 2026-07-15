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
    description: "App zur persönlichen Finanz- und Budgetverwaltung",
  },
  {
    title: "My Portfolio",
    slug: "my-portfolio",
    thumbnail: thumbnailMyPortfolio,
    description: "Persönliche responsive Portfolio-Website",
  },
  {
    title: "Shopify Listing",
    slug: "shopify-listing",
    thumbnail: thumbnailShopifyListing,
    description: "Shopify-Produktauflistung & Vorschau-Manager",
  },
  {
    title: "Server Tycoon",
    slug: "server-tycoon",
    thumbnail: thumbnailServerTycoon,
    description: "Simulations-Dashboard zur Serververwaltung",
  },
  {
    title: "College App",
    slug: "college-app",
    thumbnail: thumbnailCollegeApp,
    description: "Bildungs-ERP und Kursverwaltungs-App",
  },
] as const satisfies ProjectPreview[];
