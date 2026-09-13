function Technologies() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold">
          Technologies We Use
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore the modern tools and technologies used to create
          fast, responsive, and powerful web applications.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          <div className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold">HTML</h3>
            <p className="mt-2 text-gray-600">
              Structure of modern websites.
            </p>
          </div>

          <div className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold">CSS</h3>
            <p className="mt-2 text-gray-600">
              Styling and responsive layouts.
            </p>
          </div>

          <div className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold">JavaScript</h3>
            <p className="mt-2 text-gray-600">
              Interactive web experiences.
            </p>
          </div>

          <div className="card bg-base-200 shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-bold">React</h3>
            <p className="mt-2 text-gray-600">
              Building modern user interfaces.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Technologies;