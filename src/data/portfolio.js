export const profile = {
  brand: 'Tobias Frontend',
  name: 'Tobias',
  role: 'Frontend Developer Junior',
  email: 'vitaletobias1@gmail.com',
  emailUrl:
    'mailto:vitaletobias1@gmail.com?subject=Contacto%20desde%20tu%20portfolio',
  github: 'https://github.com/TBVitale',
  linkedin: 'https://www.linkedin.com/in/tobias-vitale-865027282/',
  avatar: '/profile.jpeg',
  cvUrl: '/cv-tobias-vitale.pdf',
  headline:
    'Hola, soy Tobias. Estudiante de Análisis de Sistemas y frontend developer junior.',
  summary:
    'Estoy construyendo mi perfil IT combinando desarrollo frontend, bases de sistemas y experiencia administrativa en el sector salud.',
}

export const navLinks = [
  {
    label: 'Sobre mi',
    href: '#sobre-mi',
  },
  {
    label: 'Proyectos',
    href: '#proyectos',
  },
  {
    label: 'Contacto',
    href: '#contacto',
  },
]

export const projects = [
  {
    title: 'Volquetes Los Amigos',
    description:
      'Landing page entregada a un cliente real del rubro construcción. Incluye secciones informativas, diseño responsive y formulario de contacto integrado con Formspree.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Formspree'],
    status: 'Publicado',
    previewLabel: 'Landing',
    image: '/volquetes-los-amigos.png',
    demoUrl: 'https://volquetes-losamigos.netlify.app/',
    repositoryUrl: 'https://github.com/TBVitale/volquetes-los-amigos',
  },
  {
    title: 'Clínica Salud Prioritaria',
    description:
      'Sistema web de gestión clínica desarrollado con Laravel, con autenticación, roles de usuario, paneles administrativos y gestión de pacientes, turnos e insumos.',
    tags: ['Laravel', 'PHP', 'MySQL', 'Livewire', 'Tailwind CSS'],
    status: 'Deploy pendiente',
    previewLabel: 'Sistema',
    image: '/clinica-salud-prioritaria.png',
    demoUrl: '#',
    repositoryUrl: 'https://github.com/TBVitale/clinica-salud-prioritaria',
  },
  {
    title: 'Portfolio personal',
    description:
      'Portfolio personal desarrollado con React, Vite y Tailwind CSS para presentar mi perfil, proyectos, CV y canales de contacto.',
    tags: ['React', 'Vite', 'Tailwind'],
    status: 'Publicado',
    previewLabel: 'Portfolio',
    image: '/portfolio-tobias.png',
    demoUrl: 'https://tvitale-portfolio.netlify.app/',
    repositoryUrl: 'https://github.com/TBVitale/mi-portfolio',
  },
]

export const skills = [
  {
    title: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Vite',
      'Tailwind CSS',
      'Bootstrap',
    ],
  },
  {
    title: 'Backend y sistemas',
    items: ['PHP', 'Laravel', 'Node.js', 'Java', 'Android', 'Kotlin', 'MySQL'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'GitHub', 'Netlify', 'Formspree', 'XAMPP'],
  },
]
