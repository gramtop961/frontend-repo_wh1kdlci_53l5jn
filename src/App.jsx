import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkShowcase from './components/WorkShowcase';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] selection:bg-cyan-400/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
