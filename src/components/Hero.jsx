function Hero() {
          return (
                    <section className="bg-base-200 py-20">
                              <div className="container mx-auto px-4 text-center">

                                        <h1 className="text-4xl md:text-6xl font-bold">
                                                  Build Your Future with{" "}
                                                  <span className="text-primary">Code</span>
                                        </h1>

                                        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-600">
                                                  Explore modern web technologies, build real-world projects,
                                                  and develop the skills you need to become a confident developer.
                                        </p>

                                        <button className="btn btn-primary rounded-full mt-8 px-8 shadow-lg">
                                                  Get Started →
                                        </button>
                                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
  <div className="card bg-base-100 shadow-md p-6">
    <h3 className="font-bold text-xl">Modern Tools</h3>
    <p className="mt-2 text-gray-600">
      Learn React, Tailwind CSS and modern web technologies.
    </p>
  </div>

  <div className="card bg-base-100 shadow-md p-6">
    <h3 className="font-bold text-xl">Real Projects</h3>
    <p className="mt-2 text-gray-600">
      Build practical projects that improve your development skills.
    </p>
  </div>

  <div className="card bg-base-100 shadow-md p-6">
    <h3 className="font-bold text-xl">Career Growth</h3>
    <p className="mt-2 text-gray-600">
      Prepare yourself for real-world web development opportunities.
    </p>
  </div>
</div>

                              </div>
                    </section>
          );
}

export default Hero;