import { Card, CardContent } from "@/components/ui/card";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const skills = [
    { name: "Python & R", projects: ["Customer Churn Prediction", "Sales Forecasting Dashboard", "Social Media Sentiment Analysis"] },
    { name: "Machine Learning", projects: ["Customer Churn Prediction"] },
    { name: "Deep Learning", projects: ["Sales Forecasting Dashboard", "Social Media Sentiment Analysis"] },
    { name: "Data Visualization", projects: ["Sales Forecasting Dashboard"] },
    { name: "SQL & NoSQL", projects: ["Customer Churn Prediction"] },
    { name: "TensorFlow & PyTorch", projects: ["Sales Forecasting Dashboard", "Social Media Sentiment Analysis"] },
    { name: "Pandas & NumPy", projects: ["Customer Churn Prediction", "Sales Forecasting Dashboard"] },
    { name: "Tableau & Power BI", projects: ["Sales Forecasting Dashboard"] },
    { name: "Statistical Analysis", projects: ["Customer Churn Prediction"] },
    { name: "NLP & Text Mining", projects: ["Social Media Sentiment Analysis"] },
    { name: "Time Series Analysis", projects: ["Sales Forecasting Dashboard"] },
    { name: "Computer Vision", projects: [] }
  ];

  const handleSkillClick = (skill: any) => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
      
      // Highlight projects that use this skill
      setTimeout(() => {
        const projectCards = document.querySelectorAll('[data-project-title]');
        projectCards.forEach((card) => {
          const projectTitle = card.getAttribute('data-project-title');
          if (skill.projects.includes(projectTitle)) {
            card.classList.add('ring-2', 'ring-primary', 'ring-opacity-50');
            setTimeout(() => {
              card.classList.remove('ring-2', 'ring-primary', 'ring-opacity-50');
            }, 3000);
          }
        });
      }, 500);
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that make a difference
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="relative animate-fade-in">
            <div className="aspect-square rounded-2xl overflow-hidden elegant-shadow">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent-purple/20 rounded-2xl -z-10 blur-xl" />
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold">Hi, I'm Adarsh Srivastava</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A passionate data scientist and machine learning engineer with a B.Tech in Electronics and Communication Engineering from Gurukul Kangri University. I specialize in extracting meaningful insights from complex datasets using machine learning, statistical analysis, and modern data visualization techniques.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not analyzing data, you'll find me exploring new ML algorithms, 
                contributing to open-source projects, or learning about the latest developments 
                in AI and deep learning.
              </p>
            </div>
            
            {/* Skills */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Skills & Technologies</h4>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <Card 
                    key={skill.name} 
                    className="glass-card hover:bg-primary/10 smooth-transition cursor-pointer hover:scale-105 transform"
                    onClick={() => handleSkillClick(skill)}
                  >
                    <CardContent className="p-4 text-center">
                      <span className="font-medium">{skill.name}</span>
                      {skill.projects.length > 0 && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {skill.projects.length} project{skill.projects.length > 1 ? 's' : ''}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;