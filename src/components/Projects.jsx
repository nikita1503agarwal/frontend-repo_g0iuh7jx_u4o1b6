import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Projects() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/projects`)
        const data = await res.json()
        setItems(data.projects || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchProjects()
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Projects</h2>
          <p className="text-gray-600">Selected client work</p>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading…</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((c) => (
              <div key={c.id} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-white">
                <div className="text-xs uppercase tracking-wide text-gray-500">{c.client}</div>
                <h3 className="text-xl font-semibold text-gray-900 mt-1">{c.title}</h3>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{c.summary}</p>
                {c.results && c.results.length > 0 && (
                  <ul className="mt-4 space-y-1 text-sm text-gray-700 list-disc list-inside">
                    {c.results.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
