import { useState } from 'react'

function Header({ links, profile }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-900/80 bg-zinc-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a className="flex items-center gap-3 text-white" href="#inicio">
          <img
            className="size-9 rounded-md"
            src="/favicon.svg"
            alt=""
            aria-hidden="true"
          />
          <span>
            <span className="block text-sm font-bold leading-none tracking-wide">
              {profile.name}
            </span>
            <span className="mt-1 block text-xs font-medium text-zinc-400">
              {profile.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
          {links.map((link) => (
            <a
              className="relative py-2 transition hover:text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-cyan-300 after:transition-transform after:duration-300 hover:after:scale-x-100"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="grid size-10 place-items-center rounded-md border border-zinc-800 text-zinc-200 transition hover:border-cyan-300 hover:text-cyan-300 md:hidden"
          type="button"
          aria-label={isMenuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        className={`border-t border-zinc-900 px-6 py-4 md:hidden ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-zinc-300">
          {links.map((link) => (
            <a
              className="rounded-md px-3 py-3 transition hover:bg-zinc-900 hover:text-cyan-300"
              href={link.href}
              key={link.href}
              onClick={closeMenu}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Header
