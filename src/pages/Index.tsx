import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container px-4 text-center">
          <p className="text-muted-foreground">
            © 2025 Adarsh Srivastava. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
