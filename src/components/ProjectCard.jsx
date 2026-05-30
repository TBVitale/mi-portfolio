function ProjectCard({ project }) {
  const hasDemo = project.demoUrl && project.demoUrl !== '#'
  const hasRepository = project.repositoryUrl && project.repositoryUrl !== '#'

  return (
    <article className="overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 transition hover:-translate-y-1 hover:border-cyan-300">
      <div className="aspect-video overflow-hidden border-b border-zinc-800 bg-zinc-950">
        {project.image ? (
          <img
            className="h-full w-full object-cover object-top transition duration-500 hover:scale-105"
            src={project.image}
            alt={`Captura del proyecto ${project.title}`}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {project.previewLabel}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <span className="rounded bg-cyan-300/10 px-2 py-1 text-xs font-medium text-cyan-300">
            {project.status}
          </span>
        </div>

        <p className="mt-3 leading-7 text-zinc-300">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              className="rounded bg-zinc-800 px-2 py-1 text-xs text-zinc-300"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {hasDemo && (
            <a
              className="rounded-md bg-cyan-300 px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-lg hover:shadow-cyan-950/40"
              href={project.demoUrl}
              rel="noreferrer"
              target="_blank"
            >
              Ver demo
            </a>
          )}
          {hasRepository && (
            <a
              className="rounded-md border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-100 transition hover:border-cyan-300 hover:text-cyan-300"
              href={project.repositoryUrl}
              rel="noreferrer"
              target="_blank"
            >
              Código
            </a>
          )}
          {!hasDemo && !hasRepository && (
            <span className="rounded-md border border-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-500">
              Deploy en preparación
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
