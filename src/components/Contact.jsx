function Contact() {
          return (
                    <section className="py-20 bg-base-200">
                              <div className="container mx-auto px-4">

                                        <div className="text-center">
                                                  <h2 className="text-3xl md:text-4xl font-bold">
                                                            Contact Us
                                                  </h2>

                                                  <p className="mt-4 text-gray-600">
                                                            Have a question or want to work together? Send us a message.
                                                  </p>
                                        </div>

                                        <div className="max-w-xl mx-auto mt-10">
                                                  <form className="card bg-base-100 shadow-md p-6">

                                                            <input
                                                                      type="text"
                                                                      placeholder="Your Name"
                                                                      className="input input-bordered w-full mb-4"
                                                            />

                                                            <input
                                                                      type="email"
                                                                      placeholder="Your Email"
                                                                      className="input input-bordered w-full mb-4"
                                                            />

                                                            <textarea
                                                                      placeholder="Your Message"
                                                                      className="textarea textarea-bordered w-full h-32 mb-4"
                                                            ></textarea>

                                                            <button className="btn btn-primary rounded-full">
                                                                      Send Message
                                                            </button>

                                                  </form>
                                        </div>

                              </div>
                    </section>
          );
}

export default Contact;