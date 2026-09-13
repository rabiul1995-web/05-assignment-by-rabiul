function Projects() {
          return (
                    <section id="projects" className="py-20 bg-base-200">
                              <div className="container mx-auto px-4">

                                        <div className="text-center">
                                                  <h2 className="text-3xl md:text-4xl font-bold">
                                                            Featured Projects
                                                  </h2>

                                                  <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                                                            Explore some practical projects built with modern
                                                            web technologies and clean user interfaces.
                                                  </p>
                                        </div>

                                        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">

                                                  <div className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition">
                                                            <h3 className="text-2xl font-bold">Portfolio Website</h3>
                                                            <p className="mt-3 text-gray-600">
                                                                      A responsive portfolio website to showcase skills,
                                                                      projects, and professional experience.
                                                            </p>
                                                            <button className="btn btn-primary rounded-full mt-6">
                                                                      View Project
                                                            </button>
                                                  </div>

                                                  <div className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition">
                                                            <h3 className="text-2xl font-bold">Task Manager</h3>
                                                            <p className="mt-3 text-gray-600">
                                                                      A simple application for organizing daily tasks
                                                                      and tracking progress.
                                                            </p>
                                                            <button className="btn btn-primary rounded-full mt-6">
                                                                      View Project
                                                            </button>
                                                  </div>

                                                  <div className="card bg-base-100 shadow-md p-6 hover:shadow-xl transition">
                                                            <h3 className="text-2xl font-bold">Weather Dashboard</h3>
                                                            <p className="mt-3 text-gray-600">
                                                                      A clean dashboard that displays useful weather
                                                                      information through an API.
                                                            </p>
                                                            <button className="btn btn-primary rounded-full mt-6">
                                                                      View Project
                                                            </button>
                                                  </div>

                                        </div>
                              </div>
                    </section>
          );
}

export default Projects;