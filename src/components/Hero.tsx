import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent-purple/10 to-accent-blue/20" />
      
      {/* Content */}
      <div className="container px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              <span className="hero-text">Data</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-light text-muted-foreground">
              Scientist & ML Engineer
            </h2>
          </div>
          
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            I transform raw data into actionable insights through advanced analytics, 
            machine learning models, and compelling data visualizations.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6 pt-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10 hover:text-primary smooth-transition"
              onClick={() => window.open('https://github.com/maltiadarsh', '_blank')}
            >
              <Github className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10 hover:text-primary smooth-transition"
              onClick={() => window.open('https://www.linkedin.com/in/maltiadarsh/', '_blank')}
            >
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-primary/10 hover:text-primary smooth-transition"
              onClick={() => window.open('mailto:hey.adarshsrivastava@gmail.com', '_blank')}
            >
              <Mail className="h-6 w-6" />
            </Button>
          </div>
          
          {/* CTA Buttons */}
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium smooth-transition glow-effect"
            >
              View My Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-medium smooth-transition"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'maltiadarsh_Resume.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;