function Hero() {
  return (
    <section id="home" className="bg-base-200 py-20">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Build Your Future with{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
                Modern Technology
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Explore modern web technologies, build real-world projects,
              and develop the skills you need to become a confident developer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button className="btn rounded-full border-0 text-white bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-7">
                Explore Technologies
              </button>

              <button className="btn btn-outline rounded-full px-7">
                Learn More
              </button>

            </div>
          </div>

          {/* Right Banner */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
              alt="Developer working with modern technology"
              className="w-full rounded-2xl shadow-xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;

