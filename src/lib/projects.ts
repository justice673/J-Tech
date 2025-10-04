export interface Project {
  id: string
  title: string
  description: string
  tech: string[]
  imageSrc: string
  hrefLive?: string
  hrefRepo?: string
}

export const projects: Project[] = [
  {
    id: "parlaviva",
    title: "ParlaViva Translation Platform",
    description: "AI-powered multilingual platform for real-time text, document, speech, and website translation with team collaboration and secure workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "AI", "Translations"],
    imageSrc: "/projects/parlaviva.png",
    hrefLive: "https://parlaviva.vercel.app/",
    hrefRepo: ""
  },
  {
    id: "tjhope",
    title: "T.J. Hope Foundation",
    description: "Non‑profit foundation platform showcasing impact metrics, campaigns, and community programs. Contributed core frontend pages, SCSS component system, accessibility improvements, and donation/volunteer engagement UX.",
    tech: ["Next.js", "TypeScript", "SCSS", "Accessibility", "SEO"],
    imageSrc: "/projects/tjhope.png",
    hrefLive: "https://www.tjhopefoundation.org/",
    hrefRepo: "" // add if public
  },
  {
    id: "xperience",
    title: "X-Perience Job & Internship Finder",
    description: "Collaborative job discovery platform for internships and full-time roles. Contributed significant frontend components and UX refinements (listing layout, responsive filters, improved accessibility).",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Job API"],
    imageSrc: "/projects/x-perience.png",
    hrefLive: "https://x-perience-frontend.vercel.app/",
    hrefRepo: ""
  },
  {
    id: "educameroon",
    title: "EduCameroon School Management System",
    description: "School management system for Cameroon secondary schools: handles student enrollment, class scheduling, timetables, exam results, curriculum resources, and role‑based access for admins, teachers, students, and guardians.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "School Mgmt"],
    imageSrc: "/projects/educameroon.png",
    hrefLive: "https://educameroon.vercel.app/",
    hrefRepo: ""
  },
  {
    id: "jabaspace",
    title: "Jaba Space Startup Incubator",
    description: "Early-stage startup incubator platform providing venture support, curated resources, mentor matching, founder collaboration spaces, and application onboarding workflows.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageSrc: "/projects/jabaspace.png",
    hrefLive: "https://jaba-space.vercel.app/",
    hrefRepo: ""
  }
]
