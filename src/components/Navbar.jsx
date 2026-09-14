import { useState } from "react";
function Navbar() {
  const [active, setActive] = useState("home");
  return (
    <nav className="sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 py-3">

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button className="btn btn-ghost btn-sm text-xl">
              ☰
            </button>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold">
              DS
            </div>

            <span className="text-xl font-bold">
              Dev Stack
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a
                  href="#home"
                  onClick={() => setActive("home")}
                  className={active === "home" ? "text-pink-600" : ""}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#technologies"
                  onClick={() => setActive("technologies")}
                  className={active === "technologies" ? "text-pink-600" : ""}
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  onClick={() => setActive("projects")}
                  className={active === "projects" ? "text-pink-600" : ""}
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={() => setActive("about")}
                  className={active === "about" ? "text-pink-600" : ""}
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={() => setActive("contact")}
                  className={active === "contact" ? "text-pink-600" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-1 md:gap-2">

            <button className="btn btn-ghost btn-sm md:btn-md rounded-full">
              Sign In
            </button>

            <button className="btn rounded-full bg-gradient-to-r from-pink-500 to-orange-500 border-none text-white hover:from-pink-600 hover:to-orange-600">
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

