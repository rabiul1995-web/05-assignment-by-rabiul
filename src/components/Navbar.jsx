function Navbar() {
  return (
    <nav className="navbar bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
        
        {/* Logo */}
        <div className="flex-1">
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
        <div className="ml-4 flex gap-2">
          <button className="btn btn-primary rounded-full px-6">
  Sign Up
</button>
          <button className="btn btn-primary">Sign Up</button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;