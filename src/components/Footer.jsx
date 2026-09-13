function Footer() {
  return (
    <footer className="bg-base-300 pt-12 pb-6">
      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              ⚡ Dev Stack
            </h3>

            <p className="mt-4 text-gray-600">
              Learn modern web technologies, build practical projects,
              and grow your development skills.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              <a href="#" className="btn btn-sm btn-circle">
                GH
              </a>

              <a href="#" className="btn btn-sm btn-circle">
                X
              </a>

              <a href="#" className="btn btn-sm btn-circle">
                in
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-lg">Product</h4>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-primary">Technologies</a></li>
              <li><a href="#" className="hover:text-primary">Projects</a></li>
              <li><a href="#" className="hover:text-primary">Learning</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg">Company</h4>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><a href="#about" className="hover:text-primary">About Us</a></li>
              <li><a href="#contact" className="hover:text-primary">Contact</a></li>
              <li><a href="#" className="hover:text-primary">Careers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg">Legal</h4>

            <ul className="mt-4 space-y-3 text-gray-600">
              <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-400/30 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-500">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-primary">
              Privacy
            </a>

            <a href="#" className="hover:text-primary">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
