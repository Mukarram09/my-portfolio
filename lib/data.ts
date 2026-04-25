import { Code, BookUser, Zap, LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  type: string;
  description: string;
  link: string;
  tags: string[];
}

export interface Service {
  icon: LucideIcon;
  title: string;
}

export const SKILLS = ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Node.js", "TypeScript", "UI/UX", "Git", "Framer Motion", "Vercel"];

export const SERVICES: Service[] = [
  { icon: Code, title: "Website Development" },
  { icon: BookUser, title: "Custom UI Solutions" },
  { icon: Zap, title: "Frontend Optimization" },
];

export const PROJECTS: Project[] = [
  {
    title: "Project A - React SaaS Platform",
    type: "Next.js Enterprise Solution",
    description: "Built a scalable dashboard for data visualization.",
    link: "#",
    tags: ["React", "D3.js", "Tailwind"]
  },
  {
    title: "Project B - High-Fidelity E-commerce",
    type: "Headless Shopify Storefront",
    description: "Optimized for 99+ Lighthouse performance scores.",
    link: "#",
    tags: ["Shopify", "Next.js", "Vercel"]
  }
];