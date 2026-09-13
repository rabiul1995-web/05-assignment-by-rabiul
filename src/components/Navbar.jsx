function Navbar() {
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
          <div className="text-center md:text-left">
            <a className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              ⚡ Dev Stack
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center">
            <ul className="menu menu-horizontal px-1">
              <li><a href="#home">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-1 md:gap-2">

            <button className="btn btn-ghost btn-sm md:btn-md rounded-full">
              Sign In
            </button>

            <button className="btn btn-primary btn-sm md:btn-md rounded-full px-3 md:px-6">
              Sign Up
            </button>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;

