import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticlesBackground from "./components/ParticlesBackground";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <>
      
        <ParticlesBackground />
      

      <main className="relative z-10 min-h-screen bg-transparent">
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
      <WhatsAppButton />
      <Analytics />
    </>
  );
}

export default App;