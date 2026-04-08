export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  imageSrc: string
  hrefLive?: string
  hrefRepo?: string
  status?: 'in-progress' | 'completed' | 'live' | 'preview'
}

export const projects: Project[] = [
  {
    id: "consentmd-onboarding",
    title: "ConsentMD Onboarding Platform",
    description: "A workforce and onboarding platform built for ConsentMD to help healthcare organizations across the United States recruit, onboard, and manage healthcare professionals in one centralized system. It enables healthcare personnel to discover job opportunities, complete onboarding steps, access training courses, and earn certifications through a dedicated dashboard.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageSrc: "/projects/onboarding.png",
    hrefLive: "https://onboarding.consentmd.ai/",
    status: "live"
  },
  {
    id: "gmbinvestments",
    title: "GMB Investments",
    description: "A professional corporate website for an investment firm based in Cape Town, designed to present services, investment focus, and vision with clarity and trust. The platform uses a modern interface, intuitive navigation, and strong visual hierarchy to communicate financial information effectively while maintaining a polished corporate presence.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GSAP"],
    imageSrc: "/projects/gmbinvestment.png",
    hrefLive: "https://gmbinvestments.co.za/",
    status: "live"
  },
  {
    id: "homedeco",
    title: "HomeDeco Interior Design",
    description: "Modern interior design platform showcasing residential and commercial space designs. Features service offerings, completed project galleries, client testimonials, and newsletter subscription for personalized design consultations.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageSrc: "/projects/home-deco.png",
    hrefLive: "https://home-deco-sigma.vercel.app/",
    hrefRepo: "",
    status: "live"
  },
  {
    id: "parlaviva",
    title: "ParlaViva Translation Platform",
    description: "AI-powered multilingual platform for real-time text, document, speech, and website translation with team collaboration and secure workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI", "MongoDB" , "Express.js(Node.js)"],
    imageSrc: "/projects/parlaviva.png",
    hrefLive: "https://parlaviva.vercel.app/",
    hrefRepo: "",
    status: "live"
  },
  {
    id: "tjhope",
    title: "T.J. Hope Foundation",
    description: "Non‑profit foundation platform showcasing impact metrics, campaigns, and community programs. Contributed core frontend pages, SCSS component system, accessibility improvements, and donation/volunteer engagement UX.",
    tech: ["Next.js", "TypeScript", "SCSS", "Accessibility", "SEO"],
    imageSrc: "/projects/tjhope.png",
    hrefLive: "https://www.tjhopefoundation.org/",
    hrefRepo: "", // add if public
    status: "in-progress"
  },
  {
    id: "xperience",
    title: "X-Perience Job & Internship Finder",
    description: "Collaborative job discovery platform for internships and full-time roles. Contributed significant frontend components and UX refinements (listing layout, responsive filters, improved accessibility).",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Job API"],
    imageSrc: "/projects/x-perience.png",
    hrefLive: "https://x-perience-frontend.vercel.app/",
    hrefRepo: "",
    status: "in-progress"
  },
  {
    id: "educameroon",
    title: "EduCameroon School Management System",
    description: "School management system for Cameroon secondary schools: handles student enrollment, class scheduling, timetables, exam results, curriculum resources, and role‑based access for admins, teachers, students, and guardians.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    imageSrc: "/projects/educameroon.png",
    hrefLive: "https://educameroon.vercel.app/",
    hrefRepo: "",
    status: "in-progress"
  },
  {
    id: "jabaspace",
    title: "Jaba Space Startup Incubator",
    description: "Early-stage startup incubator platform providing venture support, curated resources, mentor matching, founder collaboration spaces, and application onboarding workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageSrc: "/projects/jabaspace.png",
    hrefLive: "https://jaba-space.vercel.app/",
    hrefRepo: "",
    status: "live"
  },
  {
    id: "novacart",
    title: "NovaCart E-commerce Platform",
    description: "Modern fashion e-commerce platform featuring trending products, category browsing, seasonal collections, wishlist functionality, cart management, user authentication, and newsletter subscription system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Authentication"],
    imageSrc: "/projects/novacart.png",
    hrefLive: "https://nova-cart-delta.vercel.app/",
    hrefRepo: "",
    status: "live"
  },
  {
    id: "jsrecipebox",
    title: "J's Recipe Box",
    description: "Community-driven recipe sharing platform where food lovers discover, share, and create amazing recipes. Features expert recipes from professional chefs, community reviews, step-by-step visual guides, and newsletter subscription.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express.js", "Authentication"],
    imageSrc: "/projects/j's-recipe.png",
    hrefLive: "https://j-s-recipe-box.vercel.app/",
    hrefRepo: "",
    status: "live"
  },
  {
    id: "codingjojo",
    title: "Coding Jojo",
    description: "Elearning platform for developers with guided courses, structured milestones, and progress tracking tools tailored to modern workflows.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    imageSrc: "/projects/codingjojo.png",
    hrefLive: "https://codingjojo.vercel.app/",
    status: "in-progress"
  },
  {
    id: "elitehome",
    title: "EliteHome Real Estate Platform",
    description: "Modern real estate platform connecting buyers with verified properties. Features extensive property listings, search functionality, mortgage calculator, market insights, neighborhood analytics, favorites system, and expert agent support.",
    tech: ["Next.js", "Tailwind CSS", "MongoDB", "Express.js"],
    imageSrc: "/projects/elitehome.png",
    hrefLive: "https://elitehome.vercel.app/",
    hrefRepo: "",
    status: "live"
  },
  {
    id: "monster",
    title: "Monster Energy Drink Redesign",
    description: "A modern, animated redesign of the Monster Energy Drink website. Built to showcase advanced GSAP animation skills, Three.js 3D effects, and a sleek UI using Next.js, React, TypeScript, and Tailwind CSS.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js", "GSAP"],
    imageSrc: "/projects/monster.png",
    hrefLive: "https://monster-enerydrink.vercel.app/",
    status: "live"
  }
]
