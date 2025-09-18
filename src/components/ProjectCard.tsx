import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden glass-card hover:elegant-shadow smooth-transition hover:-translate-y-2" data-project-title={title}>
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover smooth-transition group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 smooth-transition" />
        
        {/* Project Links Overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 smooth-transition">
          {liveUrl && (
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          )}
          {githubUrl && (
            <Button size="sm" variant="secondary" className="hover:bg-secondary/80">
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;