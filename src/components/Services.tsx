import { Wrench, Code, Smartphone, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "CAD/CAE Design Services",
      description: "Professional 2D & 3D modeling, simulation, and design optimization for mechanical components and systems.",
      features: [
        "3D Product Design & Modeling",
        "Engineering Drawings & Documentation",
        "Finite Element Analysis (FEA)",
        "Design Optimization & Validation",
        "Prototype Development Support"
      ],
      tools: ["Creo", "AutoCAD", "SolidWorks", "Ansys"],
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Code,
      title: "Front-End Web Development",
      description: "Creating responsive, interactive websites with modern design principles and optimal user experience.",
      features: [
        "Responsive Web Design",
        "Interactive User Interfaces",
        "Modern JavaScript Applications",
        "Cross-Browser Compatibility",
        "Performance Optimization"
      ],
      tools: ["HTML", "CSS", "JavaScript", "React"],
      gradient: "from-accent to-accent-glow"
    },
    {
      icon: Smartphone,
      title: "App Development Support",
      description: "UI/UX design and front-end development support for lightweight applications and mobile interfaces.",
      features: [
        "UI/UX Design Consultation",
        "Prototype Development",
        "Interface Design Systems",
        "User Experience Optimization",
        "Technical Documentation"
      ],
      tools: ["Figma", "React", "CSS", "JavaScript"],
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
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Combining engineering expertise with modern technology to deliver 
            high-quality design and development solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-hover border-0 bg-gradient-to-br from-card to-secondary/20 overflow-hidden group"
            >
              <CardHeader className="pb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">What I Offer:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Tools */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Tools & Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map((tool, toolIndex) => (
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
                  Get Started
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
                Ready to Start Your Project?
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                Whether you need CAD design services, web development, or technical consultation, 
                I'm here to help bring your ideas to life. Let's discuss how we can work together 
                to achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={scrollToContact}
                  className="btn-hero"
                >
                  Start a Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('mailto:purushothaman752005@gmail.com', '_blank')}
                >
                  Send Quick Email
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