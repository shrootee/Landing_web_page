import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Feature from "./components/Features";
import Services from "./components/services";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#141517] selection:bg-[#D7EEDD] selection:text-[#141517]">
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <Services />
        <Testimonial />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;