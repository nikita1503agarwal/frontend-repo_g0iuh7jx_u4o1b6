import { useState } from 'react'

const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.detail || 'Failed to submit')
      }

      setStatus({ type: 'success', message: 'Thanks! We will reach out shortly.' })
      setForm({ name: '', email: '', company: '', message: '' })
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Contact</h2>
        <p className="text-gray-600 mt-2">Tell us about your project.</p>

        <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input name="company" value={form.company} onChange={handleChange} className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" />
          </div>

          {status && (
            <div className={`rounded-md p-3 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {status.message}
            </div>
          )}

          <div className="flex items-center gap-3">
            <button type="submit" disabled={loading} className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition-colors disabled:opacity-60">
              {loading ? 'Sending…' : 'Send Message'}
            </button>
            <a href="mailto:hello@oboloi.com" className="text-indigo-700 hover:text-indigo-800 font-semibold">hello@oboloi.com</a>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
