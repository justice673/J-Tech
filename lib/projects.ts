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
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI, secure payments, and real-time inventory management.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
    imageSrc: "/project-1.svg",
    hrefLive: "#",
    hrefRepo: "#"
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    imageSrc: "/project-2.svg",
    hrefLive: "#",
    hrefRepo: "#"
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeather API"],
    imageSrc: "/project-3.svg",
    hrefLive: "#",
    hrefRepo: "#"
  },
  {
    id: "4",
    title: "Portfolio CMS",
    description: "Content management system for developers to showcase their work with dynamic content and easy customization.",
    tech: ["Next.js", "Sanity", "TypeScript", "Framer Motion"],
    imageSrc: "/project-4.svg",
    hrefLive: "#",
    hrefRepo: "#"
  }
]
