import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} oboloi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#products" className="hover:text-gray-900">Products</a>
            <a href="#projects" className="hover:text-gray-900">Projects</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
