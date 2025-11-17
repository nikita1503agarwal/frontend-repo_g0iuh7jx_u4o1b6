import { useEffect, useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Products() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/products`)
        const data = await res.json()
        setItems(data.products || [])
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Products</h2>
          <p className="text-gray-600">What we build and ship</p>
        </div>

        {loading ? (
          <p className="text-gray-500">Loading…</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {items.map((p) => (
              <div key={p.id} className="rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow bg-gradient-to-b from-white to-gray-50">
                <div className="h-10 w-10 rounded-lg bg-indigo-100 text-indigo-600 grid place-items-center font-bold mb-4">
                  {p.name.split(' ').map(w => w[0]).slice(0,2).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
                <p className="text-indigo-700 text-sm mt-1 font-medium">{p.tagline}</p>
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">{p.description}</p>
                {p.links?.learn_more && (
                  <a href={p.links.learn_more} className="inline-block mt-4 text-indigo-600 hover:text-indigo-700 font-semibold">Learn more →</a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Products
