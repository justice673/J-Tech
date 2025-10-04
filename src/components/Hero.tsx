'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ShinyText } from '@/components/ui/text-effect'
import { EtherealShadow } from './EtherealShadow'
import { CycleText } from '@/components/ui/cycle-text'

const socialLinks = [
	{
		name: 'GitHub',
		href: 'https://github.com/justice673',
		icon: (
			<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
				<path
					fillRule="evenodd"
					d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: 'LinkedIn',
		href: 'https://www.linkedin.com/in/justice-fonge-5087b12b2',
		icon: (
			<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
]

export default function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Ethereal Shadow Background */}
			<div className="absolute inset-0">
				<EtherealShadow
					color="rgba(34, 211, 238, 0.15)"
					animation={{ scale: 40, speed: 30 }}
					noise={{ opacity: 0.05, scale: 1.2 }}
					className="w-full h-full"
				/>
			</div>

			{/* Background gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary-bg/90 via-primary-bg/80 to-primary-bg/90" />

			<div className="relative z-10 container mx-auto px-4 md:px-6">
				<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
					{/* Left: Text */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
						className="text-left"
					>
						<motion.h1
							className="mb-6 text-4xl font-bold tracking-tight text-text md:text-6xl lg:text-7xl"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						>
							<ShinyText className="[background-size:200%_100%]">Fonge Justice</ShinyText>
						</motion.h1>

						<motion.h2
							className="mb-6 text-xl font-medium md:text-2xl lg:text-3xl"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						>
							<CycleText phrases={["Software Developer", "Full Stack Developer"]} />
						</motion.h2>

						<motion.p
							className="mb-8 max-w-2xl text-lg text-muted md:text-xl"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
						>
							I craft digital experiences with clean code, modern design, and a passion for performance. Let&apos;s build something amazing together.
						</motion.p>

						<motion.div
							className="mb-10 flex flex-col items-start gap-4 sm:flex-row"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
						>
							<Link
								href="#projects"
								className="inline-flex items-center justify-center bg-accent px-8 py-3 text-sm font-medium text-primary-bg transition-all duration-200 hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-bg"
							>
								View Projects
							</Link>
							<Link
								href="#contact"
								className="inline-flex items-center justify-center border border-accent px-8 py-3 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary-bg"
							>
								Contact Me
							</Link>
						</motion.div>

						<motion.div
							className="flex items-center gap-6"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
						>
							{socialLinks.map((social) => (
								<Link
									key={social.name}
									href={social.href}
									className="text-muted transition-colors hover:text-accent"
									aria-label={social.name}
								>
									{social.icon}
								</Link>
							))}
						</motion.div>
					</motion.div>

					{/* Right: Circular image with glow */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 10 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						transition={{
							duration: 0.9,
							delay: 0.2,
							ease: [0.22, 1, 0.36, 1],
						}}
						className="relative mx-auto w-64 h-64 md:w-[28rem] md:h-[28rem]"
					>
						{/* Glow ring */}
						<div
							className="absolute -inset-4 opacity-40 [filter:blur(24px)] [background:radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.25),transparent_60%)]"
						/>
						{/* Disc */}
						<div
							className="absolute inset-0 shadow-[0_0_40px_rgba(34,211,238,0.25)] [clip-path:circle(50%_at_50%_50%)] [background:linear-gradient(180deg,#e5e7eb_0%,#d1d5db_50%,#bfc4c9_100%)]"
						/>
						{/* Image */}
						<div className="absolute inset-0 p-8 [clip-path:circle(50%_at_50%_50%)]">
							<Image
								src="/you.jpeg"
								alt="Fonge Justice"
								fill
								className="object-cover object-top"
							/>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
