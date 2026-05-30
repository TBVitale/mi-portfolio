function Contact({ profile }) {
  return (
    <section id="contacto" className="border-t border-zinc-800">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
          Contacto
        </p>
        <h2 className="mt-3 text-3xl font-bold">Hablemos</h2>
        <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
          Estoy abierto a oportunidades, prácticas, colaboraciones y proyectos
          donde pueda seguir creciendo como desarrollador frontend.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-md bg-cyan-300 px-5 py-3 text-center font-semibold text-zinc-950 transition hover:bg-cyan-200"
            href={profile.emailUrl}
            rel="noreferrer"
            target="_blank"
          >
            Enviar email
          </a>
          <a
            className="rounded-md border border-zinc-700 px-5 py-3 text-center font-semibold text-zinc-100 transition hover:border-cyan-300 hover:text-cyan-300"
            href={profile.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="rounded-md border border-zinc-700 px-5 py-3 text-center font-semibold text-zinc-100 transition hover:border-cyan-300 hover:text-cyan-300"
            href={profile.github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
