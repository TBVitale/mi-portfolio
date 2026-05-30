function About() {
  return (
    <section id="sobre-mi" className="border-y border-zinc-800 bg-zinc-900/50">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Sobre mi
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Perfil junior en crecimiento
          </h2>
        </div>

        <div className="space-y-5 leading-8 text-zinc-300">
          <p>
            Soy estudiante de Análisis de Sistemas y estoy construyendo mi
            camino dentro del mundo IT. Busco mi primera experiencia laboral en
            desarrollo o soporte técnico, con muchas ganas de aprender en un
            equipo real y seguir creciendo profesionalmente.
          </p>
          <p>
            Me estoy formando principalmente en frontend con HTML, CSS,
            JavaScript, React y Tailwind CSS. También estoy incorporando
            tecnologías de mi carrera como PHP, Laravel, Java, Android con
            Java/Kotlin y bases de datos.
          </p>
          <p>
            Mientras llega esa primera oportunidad, estoy abierto a realizar
            trabajos freelance, landing pages, sitios responsivos y proyectos
            simples que me permitan aplicar lo que aprendo, sumar experiencia y
            mejorar mi portfolio con casos reales.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
