import ProjectCard from "./ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Recommendation Engine",
      description: "Advanced machine learning recommendation system for personalized content delivery. Built using collaborative filtering and content-based approaches to improve user engagement and retention.",
      image: project1,
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Flask"],
      liveUrl: "#",
      githubUrl: "https://github.com/maltiadarsh/recommendation_engine"
    },
    {
      title: "Federated Learning for Privacy-Preserving Predictions",
      description: "Cutting-edge federated learning implementation that enables distributed machine learning while preserving data privacy. Demonstrates advanced techniques in privacy-preserving AI.",
      image: project2,
      technologies: ["Python", "TensorFlow", "PyTorch", "Federated Learning", "Privacy-ML"],
      liveUrl: "#",
      githubUrl: "https://github.com/maltiadarsh/Federated-Learning-for-Privacy-Preserving-Predictions"
    },
    {
      title: "Sentiment Analysis Application",
      description: "Real-time sentiment analysis tool for social media monitoring and brand analysis. Utilizes natural language processing to classify emotions and sentiments from text data.",
      image: project3,
      technologies: ["Python", "NLTK", "Jupyter", "Machine Learning", "NLP"],
      liveUrl: "#",
      githubUrl: "https://github.com/maltiadarsh/sentiment-analysis-app"
    },
    {
      title: "Vendor Analysis System",
      description: "Comprehensive vendor performance analysis and evaluation system. Provides insights into vendor reliability, cost-effectiveness, and quality metrics for business decision making.",
      image: project1,
      technologies: ["Python", "Data Analysis", "Pandas", "Visualization", "Business Intelligence"],
      liveUrl: "#",
      githubUrl: "https://github.com/maltiadarsh/vender-analysis"
    },
    {
      title: "Customer Categorizer",
      description: "Intelligent customer segmentation system using machine learning algorithms. Helps businesses understand customer behavior patterns and optimize marketing strategies.",
      image: project2,
      technologies: ["Python", "Jupyter Notebook", "Clustering", "Scikit-learn", "Data Mining"],
      liveUrl: "#",
      githubUrl: "https://github.com/maltiadarsh/Customer_Categorizer"
    },
    {
      title: "Phishing Detection System",
      description: "Advanced cybersecurity tool for detecting phishing websites and malicious URLs. Uses machine learning to identify and prevent phishing attacks in real-time.",
      image: project3,
      technologies: ["Python", "Machine Learning", "Cybersecurity", "Jupyter", "Classification"],
      liveUrl: "#",
      githubUrl: "https://github.com/maltiadarsh/Phishing-detection"
    }
  ];

  const dreamProjects = [
    {
      title: "AI-Powered Healthcare Diagnostics",
      description: "Computer vision system for early disease detection using medical imaging. Combining CNNs with attention mechanisms to assist radiologists in identifying anomalies with human-level accuracy.",
      technologies: ["PyTorch", "OpenCV", "FastAPI", "React", "Docker"],
      status: "Planning"
    },
    {
      title: "Climate Change Prediction Model",
      description: "Large-scale environmental data analysis using satellite imagery and IoT sensors. Building ensemble models to predict climate patterns and support environmental policy decisions.",
      technologies: ["TensorFlow", "Satellite API", "Apache Spark", "Kubernetes"],
      status: "Research"
    },
    {
      title: "Personalized Learning AI",
      description: "Adaptive learning platform that uses NLP and recommendation systems to create personalized educational content. Helping students learn more effectively through AI-driven curriculum optimization.",
      technologies: ["Transformers", "RecSys", "MongoDB", "Next.js"],
      status: "Concept"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, from concept to completion
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
        
        {/* Dream Projects Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Dream Projects</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Future projects I'm passionate about building to make a positive impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dreamProjects.map((project, index) => (
              <div 
                key={project.title}
                className="animate-scale-in glass-card p-6 hover:elegant-shadow smooth-transition hover:-translate-y-1"
                style={{ animationDelay: `${(index + 3) * 0.2}s` }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h4 className="text-xl font-semibold">{project.title}</h4>
                    <span className="px-2 py-1 text-xs bg-accent-purple/20 text-accent-purple rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <a 
            href="#contact" 
            className="text-primary hover:text-primary/80 font-medium text-lg smooth-transition hover:underline"
          >
            Want to collaborate on these dreams? Let's get in touch →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;