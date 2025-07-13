import { ExternalLink, Github, Thermometer, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "Earth Tube Heat Exchanger",
      description: "Designed an energy-efficient passive cooling system using underground tubes for optimal temperature control. This major project focuses on sustainable cooling solutions with minimal energy consumption.",
      category: "Major Project",
      duration: "2022–2026",
      technologies: ["CAD Design", "Thermal Analysis", "CFD Simulation", "Energy Optimization"],
      features: [
        "Modeled for airflow optimization",
        "Temperature distribution analysis", 
        "Energy efficiency calculations",
        "Sustainable design approach"
      ],
      icon: Thermometer,
      gradient: "from-primary to-primary-glow"
    },
    {
      title: "DailyInk Journal Website",
      description: "Built a responsive web application for personal journal management with intuitive user interface and seamless user experience. Features modern design and efficient data handling.",
      category: "AI Project",
      duration: "2024",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      features: [
        "Responsive web design",
        "Journal entry management",
        "Clean user interface",
        "Cross-platform compatibility"
      ],
      icon: BookOpen,
      liveUrl: "https://dailyink-60043723803.development.catalystserverless.in/app/index.html",
      githubUrl: "https://github.com/purushothaman-pro/PROJECT_DailyInk",
      gradient: "from-accent to-accent-glow"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my engineering projects and web development work, 
            demonstrating my skills in design, analysis, and implementation.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="card-hover border-0 bg-gradient-to-br from-card to-secondary/20 overflow-hidden"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white`}>
                    <project.icon className="h-6 w-6" />
                  </div>
                  <div className="flex gap-2">
                    {project.liveUrl && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="hover:bg-foreground hover:text-background"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="font-medium">
                    {project.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{project.duration}</span>
                </div>
                
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Projects Note */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-accent/10 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                More Projects Coming Soon
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                I'm constantly working on new projects that combine mechanical engineering principles 
                with modern technology. Check back regularly for updates, or connect with me to discuss 
                potential collaborations.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;