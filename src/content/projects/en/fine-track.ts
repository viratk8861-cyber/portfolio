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
    "Fine Track — personal finance and expense tracking application. Manage your budget and track expenses easily.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: streakon0,
        alt: "Budget Overview",
        caption: "Budget Overview",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon1,
        alt: "Expense Analytics",
        caption: "Expense Analytics",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon2,
        alt: "Transaction History",
        caption: "Transaction History",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: streakon3,
        alt: "Category Settings",
        caption: "Category Settings",
      },
    },
  ],
} as const satisfies ProjectContent;
