import { Code, BookUser, Zap, LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

import project1 from '@/public/images/factory.png';
import project2 from '@/public/images/farmiez.png';
import project3 from '@/public/images/carbid.png';

export interface Project {
  title: string;
  type: string;
  category: string;
  description: string;
  link: string;
  tags: string[];
  image: string | StaticImageData;
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
    title: "Project 1 - Factory Marketplace Platform",
    type: "Next.js Enterprise Solution",
    description: "Built a scalable dashboard for data visualization.",
    link: "#",
    tags: ["React", "D3.js", "Tailwind"],
    image: project1,
  },
  {
    title: "Project 2 - Farmiez Marketplace Platform",
    type: "Headless Shopify Storefront",
    description: "Optimized for 99+ Lighthouse performance scores.",
    link: "#",
    tags: ["Shopify", "Next.js", "Vercel"],
    image: project2,
  },
  {
    title: "Project 2 - Carbid Marketplace Platform",
    type: "Headless Shopify Storefront",
    description: "Optimized for 99+ Lighthouse performance scores.",
    link: "#",
    tags: ["Shopify", "Next.js", "Vercel"],
    image: project3,
  }
];