function Navbar() {
  return (
    <nav className="navbar sticky top-0 z-50 bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
          <button className="btn btn-ghost md:hidden">
    ☰
  </button>
        
        {/* Logo */}
        <div className="flex-1 text-center md:text-left">
  <a className="text-2xl font-bold text-primary">
    ⚡ Dev Stack
  </a>
</div>

        {/* Menu */}
        <div className="hidden md:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>Technologies</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="ml-4 flex gap-2 hidden md:flex">
         <button className="btn btn-ghost rounded-full">
    Sign In
  </button>
          <button className="btn btn-primary rounded-full px-6">
    Sign Up
  </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;