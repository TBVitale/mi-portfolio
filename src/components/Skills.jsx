function Skills({ skills }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
        Skills
      </p>
      <h2 className="mt-3 text-3xl font-bold">Tecnologias y herramientas</h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {skills.map((group) => (
          <article
            className="rounded-lg border border-zinc-800 bg-zinc-900 p-5"
            key={group.title}
          >
            <h3 className="font-bold text-zinc-100">{group.title}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-200"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills
