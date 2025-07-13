import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/https://i.postimg.cc/3xHMx3rx/Photo-from-PURUSHOTHAMAN.jpg';
import heroBg from '@/assets/hero-bg.jpg';
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/70 to-accent/80"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-accent/30 rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-accent/20 rounded-full animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-accent/20 rotate-45 animate-float" style={{
      animationDelay: '4s'
    }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-accent text-lg font-medium">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                Purushothaman V
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-accent-glow">
                CAD CAM Designer | Mechanical Engineer | AI Enthusiast | Front-End Developer
              </div>
            </div>
            
            <p className="text-lg text-white/90 max-w-2xl leading-relaxed">
              B.E. Mechanical Engineering student with a minor in AI at Vel Tech Multi Tech Engineering College. 
              Passionate about CAD/CAE design, programming, and creating innovative solutions that bridge 
              engineering and technology.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero group" onClick={() => scrollToSection('#projects')}>
                View My Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button className="btn-accent" onClick={() => scrollToSection('#contact')}>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://linkedin.com/in/purushothaman-v" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com/purushothaman-pro" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
                <Github className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
              <a href="mailto:purushothaman752005@gmail.com" className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 group">
                <Mail className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{
          animationDelay: '0.2s'
        }}>
            <div className="relative">
              {/* Background Decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent to-accent-glow rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl">
                <img 
                  src={profilePhoto} 
                  alt="Purushothaman V" 
                  className="w-64 h-64 object-cover rounded-2xl shadow-2xl"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                CGPA: 8.6 ⭐
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => scrollToSection('#about')} className="p-2 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300">
          <ArrowDown className="h-6 w-6 text-white" />
        </button>
      </div>
    </section>;
};
export default Hero;