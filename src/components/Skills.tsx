import Section from '@/components/Section'
import Badge from '@/components/Badge'
import TechCarousel from '@/components/TechCarousel'

const skillCategories = [
	{
		title: 'Frontend',
		skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'],
	},
	{
		title: 'Tools & Technologies',
		skills: ['Git', 'Docker', 'Vercel', 'Prisma'],
	},
]

const techLogos = [
	{ name: 'React', logo: '/tech/react.svg' },
	{ name: 'Next.js', logo: '/tech/nextjs.svg' },
	{ name: 'TypeScript', logo: '/tech/typescript.svg' },
	{ name: 'Tailwind CSS', logo: '/tech/tailwind.svg' },
	{ name: 'Node.js', logo: '/tech/nodejs.svg' },
	{ name: 'Express', logo: '/tech/express.svg' },
	{ name: 'NestJS', logo: '/tech/nestjs.svg' },
	{ name: 'PostgreSQL', logo: '/tech/postgres.svg' },
	{ name: 'MongoDB', logo: '/tech/mongodb.svg' },
	{ name: 'Docker', logo: '/tech/docker.svg' },
	{ name: 'Prisma', logo: '/tech/prisma.svg' },
	{ name: 'Vercel', logo: '/tech/vercel.svg' },
]

export default function Skills() {
	return (
		<Section
			id="skills"
			title="Skills & Technologies"
			description="The tools and technologies I use to bring ideas to life"
		>
			<div className="mb-14">
				<TechCarousel items={techLogos} speed={50} />
			</div>
			<div className="grid gap-8 md:grid-cols-3">
				{skillCategories.map((category) => (
					<div
						key={category.title}
						className="border border-border bg-surface p-6"
					>
						<h3 className="mb-4 text-xl font-semibold text-text">
							{category.title}
						</h3>
						<div className="flex flex-wrap gap-2">
							{category.skills.map((skill) => (
								<Badge key={skill} variant="default">
									{skill}
								</Badge>
							))}
						</div>
					</div>
				))}
			</div>
		</Section>
	)
}
