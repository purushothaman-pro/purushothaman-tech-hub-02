import { GraduationCap, Award, Languages, Code, Wrench, Brain } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skills = {
    'CAD/CAE': {
      advanced: ['Creo', 'AutoCAD'],
      intermediate: ['Catia', 'SolidWorks', 'Ansys']
    },
    'Programming': ['Python', 'JavaScript', 'HTML', 'CSS'],
    'Tools': ['VSCode', 'Git', 'GitHub'],
    'Soft Skills': ['Analytical Thinking', 'Teamwork']
  };

  const certifications = [
    'Diploma in Professional CAD (CADDCAMM Solutions)',
    'Python & Front-End Development (Simplilearn)',
    'Fusion 360 course (Autodesk)'
  ];

  const education = [
    {
      institution: 'Vel Tech Multi Tech Engineering College',
      degree: 'B.E. Mechanical Engineering, Minor in AI',
      duration: '2022–2026',
      grade: 'CGPA: 8.60 (till 6th sem)'
    },
    {
      institution: 'CSI St. Andrews School',
      degree: 'HSC',
      duration: '2022',
      grade: '74.33%'
    },
    {
      institution: 'CSI Central Hr. Sec. School',
      degree: 'SSLC',
      duration: '2020',
      grade: '80.40%'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about bridging the gap between mechanical engineering and artificial intelligence, 
            creating innovative solutions through technology and design.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-8">
            <Card className="card-hover border-0 bg-gradient-to-br from-card to-secondary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Brain className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-heading font-semibold">Background</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  I am currently pursuing B.E. Mechanical Engineering with a minor in Artificial Intelligence 
                  at Vel Tech Multi Tech Engineering College. My academic journey combines traditional engineering 
                  principles with cutting-edge AI technologies, positioning me at the forefront of modern 
                  engineering innovation.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  With expertise in CAD/CAE design and programming, I enjoy creating digital solutions that 
                  solve real-world problems. My interdisciplinary approach allows me to tackle complex 
                  challenges from multiple perspectives.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="card-hover border-0 bg-gradient-to-br from-card to-accent/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Languages className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-heading font-semibold">Languages</h3>
                </div>
                <div className="flex gap-3">
                  <Badge variant="secondary" className="px-4 py-2 text-base">Tamil</Badge>
                  <Badge variant="secondary" className="px-4 py-2 text-base">English</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            {/* Education */}
            <Card className="card-hover border-0 bg-gradient-to-br from-card to-primary/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-heading font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-primary/20 pl-4 pb-4">
                      <h4 className="font-semibold text-lg text-primary">{edu.institution}</h4>
                      <p className="text-foreground/80 font-medium">{edu.degree}</p>
                      <div className="flex justify-between items-center text-sm text-muted-foreground mt-1">
                        <span>{edu.duration}</span>
                        <Badge variant="outline" className="font-medium">{edu.grade}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="card-hover border-0 bg-gradient-to-br from-card to-accent/10">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-6 w-6 text-accent" />
                  <h3 className="text-2xl font-heading font-semibold">Certifications</h3>
                </div>
                <ul className="space-y-3">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-heading font-bold text-center mb-12 text-gradient">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="card-hover border-0 bg-gradient-to-br from-card to-primary/5">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    {category === 'CAD/CAE' && <Wrench className="h-8 w-8 text-primary mx-auto" />}
                    {category === 'Programming' && <Code className="h-8 w-8 text-primary mx-auto" />}
                    {category === 'Tools' && <Wrench className="h-8 w-8 text-primary mx-auto" />}
                    {category === 'Soft Skills' && <Brain className="h-8 w-8 text-primary mx-auto" />}
                  </div>
                  <h4 className="font-semibold text-lg mb-4 text-primary">{category}</h4>
                  <div className="space-y-2">
                    {Array.isArray(skillList) ? (
                      skillList.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="block w-full py-1">
                          {skill}
                        </Badge>
                      ))
                    ) : (
                      <>
                        {skillList.advanced && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1">Advanced</p>
                            {skillList.advanced.map((skill, index) => (
                              <Badge key={index} variant="default" className="mr-1 mb-1">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                        {skillList.intermediate && (
                          <div>
                            <p className="text-xs text-muted-foreground mb-1 mt-2">Intermediate</p>
                            {skillList.intermediate.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="mr-1 mb-1">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;