import { GraduationCap, Code, Wrench, ArrowRight, BookOpen, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const skills = [
    {
      icon: Wrench,
      title: "CAD/CAE Design Skills",
      description: "Proficient in 2D & 3D modeling, simulation, and design optimization for mechanical engineering applications.",
      features: [
        "3D Product Design & Modeling",
        "Engineering Drawings & Documentation", 
        "Finite Element Analysis (FEA)",
        "Design for Manufacturing (DFM)",
        "Technical Documentation"
      ],
      tools: ["Creo", "AutoCAD", "SolidWorks", "Ansys"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Code,
      title: "Web Development Skills",
      description: "Skilled in creating responsive, modern web applications with clean code and user-focused design.",
      features: [
        "Responsive Web Design",
        "Interactive User Interfaces",
        "Modern JavaScript Development",
        "Version Control with Git",
        "Problem Solving & Debugging"
      ],
      tools: ["HTML", "CSS", "JavaScript", "React"],
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: GraduationCap,
      title: "Academic Background",
      description: "Strong foundation in mechanical engineering principles with hands-on project experience and academic achievements.",
      features: [
        "Mechanical Engineering Fundamentals",
        "Project-Based Learning",
        "Research & Analysis Skills",
        "Team Collaboration",
        "Continuous Learning Mindset"
      ],
      tools: ["Engineering Mathematics", "Physics", "Design Theory", "Problem Solving"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            As a passionate fresher, I bring strong technical skills in engineering design 
            and web development, ready to contribute to innovative projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="card-hover border-0 bg-gradient-to-br from-card to-secondary/20 overflow-hidden group"
            >
              <CardHeader className="pb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  {skill.description}
                </p>
                
                {/* Features List */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Competencies:</h4>
                  <ul className="space-y-2">
                    {skill.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tools */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* CTA Button */}
                <Button 
                  onClick={scrollToContact}
                  className="w-full mt-6 group"
                  variant="outline"
                >
                  Let's Connect
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-4xl mx-auto border-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold mb-4 text-foreground">
                Ready to Contribute & Learn?
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                As a motivated fresher with strong technical skills and a passion for innovation, 
                I'm eager to contribute to meaningful projects and grow with the right opportunity. 
                Let's connect and explore how I can add value to your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="btn-hero"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;