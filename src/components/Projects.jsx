import ProjectCard from './ProjectCard'

function Projects({ projects }) {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-16">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Proyectos
          </p>
          <h2 className="mt-3 text-3xl font-bold">Trabajos destacados</h2>
        </div>
        <p className="max-w-xl text-zinc-400">
          Proyectos reales, académicos y personales con demo en vivo y código
          disponible en GitHub.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
