import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-indigo-600 to-blue-500" />
            <span className="text-xl font-bold tracking-tight text-gray-900">oboloi</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#products" className="hover:text-gray-900 transition-colors">Products</a>
            <a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
            <a href="/test" className="text-gray-500 hover:text-gray-900">System Test</a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2 text-sm font-medium text-gray-700">
            <a href="#products" className="block">Products</a>
            <a href="#projects" className="block">Projects</a>
            <a href="#contact" className="block">Contact</a>
            <a href="/test" className="block text-gray-500">System Test</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
