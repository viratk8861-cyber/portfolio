export const social = [
  { url: "mailto:karjigar56@gmail.com", name: "mail" },
  { url: "https://github.com/Jigar-kar", name: "github" },
  { url: "https://www.linkedin.com/in/jigaar/", name: "linkedin" },
  { url: "https://x.com/kjigar", name: "x" },
  //{ url: "https://www.instagram.com/karjigar/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
