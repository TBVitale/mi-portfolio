function Hero({ profile }) {
  return (
    <section
      id="inicio"
      className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center"
    >
      <div>
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Desarrollador frontend
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          {profile.headline}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-md bg-cyan-300 px-5 py-3 text-center font-semibold text-zinc-950 transition hover:bg-cyan-200"
            href="#proyectos"
          >
            Ver proyectos
          </a>
          <a
            className="rounded-md border border-zinc-700 px-5 py-3 text-center font-semibold text-zinc-100 transition hover:border-cyan-300 hover:text-cyan-300"
            href="#contacto"
          >
            Contactame
          </a>
          <a
            className="rounded-md border border-zinc-700 px-5 py-3 text-center font-semibold text-zinc-100 transition hover:border-cyan-300 hover:text-cyan-300"
            href={profile.cvUrl}
            rel="noreferrer"
            target="_blank"
          >
            Ver CV
          </a>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-xs flex-col items-center gap-6 md:items-end">
        <div className="overflow-hidden rounded-full border border-zinc-800 bg-zinc-900 p-1 shadow-2xl shadow-cyan-950/30">
          <img
            className="size-48 rounded-full object-cover object-top md:size-56"
            src={profile.avatar}
            alt={`Foto de perfil de ${profile.name}`}
          />
        </div>

        <div className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-5 shadow-xl shadow-zinc-950/40">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Stack principal
          </p>
          <p className="mt-2 text-sm font-medium text-zinc-200">
            React, Vite, Tailwind CSS y JavaScript moderno.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
