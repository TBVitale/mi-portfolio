function Footer({ profile }) {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.brand}</p>
        <p>Construido con React, Vite y Tailwind CSS.</p>
      </div>
    </footer>
  )
}

export default Footer
