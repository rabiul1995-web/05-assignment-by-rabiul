import TechnologySection from "./components/TechnologySection";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechnologySection />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ToastContainer />
    </>
  );
}
export default App;