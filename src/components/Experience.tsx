import { Briefcase, Award, Trophy, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experience = {
    company: "India Japan Lighting Pvt Ltd",
    role: "Engineering Intern",
    duration: "Dec 2024 - Jan 2025",
    type: "Internship",
    description: "Gained valuable hands-on experience in automotive lighting manufacturing and quality control processes.",
    responsibilities: [
      "Exposure to automotive lighting production processes",
      "Quality control and testing procedures",
      "Implementation of 5S methodology",
      "Kaizen and Lean manufacturing practices",
      "Inspection and testing aligned with OEM standards",
      "Production line optimization techniques"
    ],
    skills: ["Quality Control", "5S Methodology", "Kaizen", "Lean Manufacturing", "OEM Standards"]
  };

  const achievements = [
    {
      icon: Trophy,
      title: "Academic Excellence",
      description: "Secured 2nd rank in class with CGPA of 8.6",
      category: "Academic"
    },
    {
      icon: Users,
      title: "IEEE Student Branch Coordinator",
      description: "Leading technical initiatives and organizing engineering events (2025)",
      category: "Leadership"
    },
    {
      icon: Briefcase,
      title: "Electric Vehicle Workshop",
      description: "Participant at prestigious IIT Madras workshop on EV technology",
      category: "Technical"
    },
    {
      icon: Award,
      title: "Design Competitions",
      description: "Active participant in multiple design competitions across leading engineering colleges",
      category: "Competition"
    }
  ];

  const competitions = [
    "Vellamal Engineering College",
    "Panimalar Engineering College", 
    "SA Engineering College"
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Experience & Achievements
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through hands-on experience, academic excellence, 
            and active participation in the engineering community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Professional Experience
            </h3>
            
            <Card className="border-0 bg-gradient-to-br from-card to-primary/10 overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="font-medium">
                    {experience.type}
                  </Badge>
                </div>
                
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  {experience.role}
                </CardTitle>
                <div className="text-lg font-medium text-primary">
                  {experience.company}
                </div>
                <div className="text-sm text-muted-foreground">
                  {experience.duration}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  {experience.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground/80 text-sm">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Skills Developed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements Section */}
          <div className="space-y-8">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Key Achievements
            </h3>
            
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index} 
                  className="border-0 bg-gradient-to-br from-card to-accent/10 card-hover"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-r from-accent to-accent-glow text-white flex-shrink-0">
                        <achievement.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {achievement.category}
                          </Badge>
                        </div>
                        <p className="text-foreground/80 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Design Competitions */}
            <Card className="border-0 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-accent" />
                  Design Competition Participation
                </h4>
                <p className="text-foreground/80 text-sm mb-4">
                  Actively participated in design competitions across multiple prestigious engineering colleges:
                </p>
                <div className="space-y-2">
                  {competitions.map((college, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      <span className="text-foreground/80 text-sm">{college}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto border-0 bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8">
              <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                Growing Through Experience
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Every experience contributes to my growth as an engineer and developer. 
                I'm always looking for new challenges and opportunities to expand my skills 
                and make meaningful contributions to innovative projects.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;