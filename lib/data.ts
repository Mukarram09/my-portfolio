export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "Detailed description of your high-impact work over the last 9 years.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://yourlink.com"
  },
  {
    title: "E-Commerce Engine",
    description: "High-performance storefront with 99+ Lighthouse scores.",
    tags: ["Next.js", "Shopify", "Node.js"],
    link: "#"
  },
  // Add more projects here manually as your "admin" update
];
