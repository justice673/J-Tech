import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ProjectsGrid from '@/components/ProjectsGrid'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProjectsGrid />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
