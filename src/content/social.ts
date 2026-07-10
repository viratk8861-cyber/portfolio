export const social = [
  { url: "mailto:me@kar-jigar.com", name: "mail" },
  { url: "https://github.com/karjigar", name: "github" },
  { url: "https://www.linkedin.com/in/kar-jigar/", name: "linkedin" },
  { url: "https://x.com/KarJigar", name: "x" },
  //{ url: "https://www.instagram.com/karjigar/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
