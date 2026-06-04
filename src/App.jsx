import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Features";
import Services from "./components/services";
import Testimonial from "./components/Testimonial";
import Footer from "./components/Footer";
import { Features } from "tailwindcss";

function App() {
  return (
    <div className="max-w-[1920px] mx-auto">
      <Navbar />
      <Hero />
      <Feature />
      <Services />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;