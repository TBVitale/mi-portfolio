import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { navLinks, profile, projects, skills } from './data/portfolio'

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header links={navLinks} profile={profile} />
      <Hero profile={profile} />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact profile={profile} />
      <Footer profile={profile} />
    </main>
  )
}

export default App
