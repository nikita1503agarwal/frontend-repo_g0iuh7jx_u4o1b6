function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-24 sm:pb-32 bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              We build software that ships.
            </h1>
            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Oboloi partners with ambitious teams to design, build, and scale digital products. From idea to impact, we deliver with clarity and speed.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#products" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-semibold shadow-sm hover:bg-indigo-700 transition-colors">Explore Products</a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md px-5 py-3 text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors">Contact Us</a>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-indigo-600 to-blue-500 p-1 shadow-2xl">
              <div className="h-full w-full rounded-lg bg-white grid grid-cols-3 gap-2 p-3">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="rounded-md bg-gradient-to-br from-indigo-100 to-blue-100 border border-indigo-200/60" />
                ))}
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">Built with modern, reliable stacks tailored to your goals.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
