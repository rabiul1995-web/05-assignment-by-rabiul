import { useEffect, useState } from "react";
import { toast } from "react-toastify";

function TechnologySection() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Failed to load technologies.");
        setLoading(false);
      });
  }, []);

  const addToStack = (technology) => {
    if (stack.some((item) => item.id === technology.id)) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

    setStack([...stack, technology]);
    toast.success(`${technology.name} added to your stack!`);
  };

  const removeFromStack = (id, name) => {
    setStack(stack.filter((item) => item.id !== id));
    toast.success(`${name} removed from your stack!`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);
    toast.success("All technologies removed from your stack!");
  };

  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Technologies
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover the technologies you can learn and add to your
            personal development stack.
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">

            {/* Technology Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {technologies.map((technology) => {
                const isAdded = stack.some(
                  (item) => item.id === technology.id
                );

                return (
                  <div
                    key={technology.id}
                    className="card bg-base-100 shadow-md p-6"
                  >

                    {/* Icon */}
                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="w-16 h-16 mb-4"
                    />

                    {/* Badge */}
                    <span className="badge badge-primary mb-3">
                      {technology.badge}
                    </span>

                    {/* Name */}
                    <h3 className="text-2xl font-bold">
                      {technology.name}
                    </h3>

                    {/* Category */}
                    <span className="badge badge-outline mt-3">
                      {technology.category}
                    </span>

                    {/* Description */}
                    <p className="mt-3 text-gray-600">
                      {technology.description}
                    </p>

                    {/* Difficulty */}
                    <p className="mt-3 text-sm font-medium">
                      Difficulty: {technology.difficulty}
                    </p>

                    {/* Rating */}
                    <p className="mt-3 text-sm font-medium">
                      ⭐ {technology.rating}
                    </p>

                    {/* Add Button */}
                    <button
                      onClick={() => addToStack(technology)}
                      disabled={isAdded}
                      className="btn btn-primary rounded-full mt-5 w-full"
                    >
                      {isAdded
                        ? "✓ Added to Stack"
                        : "Add to Stack"}
                    </button>

                  </div>
                );
              })}

            </div>

            {/* Your Stack */}
            <div className="bg-base-200 rounded-xl p-6 h-fit">

              <div className="mb-6">
                <h3 className="text-2xl font-bold">
                  Your Stack ({stack.length})
                </h3>

                <button
                  onClick={removeAll}
                  className="btn btn-sm btn-outline btn-error mt-3"
                >
                  Remove All
                </button>
              </div>

              {/* Empty State */}
              {stack.length === 0 && (
                <p className="text-gray-500">
                  Your stack is empty. Add some technologies
                  to get started.
                </p>
              )}

              {/* Stack Items */}
              {stack.map((item) => (
                <div
                  key={item.id}
                  className="mb-3 p-4 bg-base-100 rounded-lg flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <img
                      src={item.icon}
                      alt={item.name}
                      className="w-10 h-10"
                    />

                    <div>
                      <h4 className="font-bold">
                        {item.name}
                      </h4>

                      <p className="text-sm text-gray-500">
                        {item.category}
                      </p>
                    </div>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() =>
                      removeFromStack(item.id, item.name)
                    }
                    className="btn btn-sm btn-error"
                  >
                    ✕
                  </button>

                </div>
              ))}

            </div>

          </div>
        )}

      </div>
    </section>
  );
}

export default TechnologySection;