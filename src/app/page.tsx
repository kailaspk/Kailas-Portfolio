import { Hero } from '@/components/sections/Hero'
import { Summary } from '@/components/sections/Summary'
import { Experience } from '@/components/sections/Experience'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Education } from '@/components/sections/Education'
import { Certifications } from '@/components/sections/Certifications'
import { Languages } from '@/components/sections/Languages'
import { Footer } from '@/components/sections/Footer'
import { Header } from '@/components/Header'
import { ThemeProvider } from '@/components/providers/ThemeProvider'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <Header />
        <main>
          <Hero />
          <Summary />
          <Experience />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Languages />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
