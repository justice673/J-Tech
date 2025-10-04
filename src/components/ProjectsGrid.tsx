import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/projects'

export default function ProjectsGrid() {
  return (
    <Section 
      id="projects" 
      title="Featured Projects" 
      description="A collection of projects that showcase my skills and experience"
    >
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            index={index}
          />
        ))}
      </div>
    </Section>
  )
}
