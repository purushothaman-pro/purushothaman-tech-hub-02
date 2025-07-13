import { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'purushothaman752005@gmail.com',
    href: 'mailto:purushothaman752005@gmail.com'
  }, {
    icon: Phone,
    label: 'Phone',
    value: '+91 8072375925',
    href: 'tel:+918072375925'
  }, {
    icon: MapPin,
    label: 'Location',
    value: 'Chennai, Tamil Nadu, India',
    href: null
  }];
  const socialLinks = [{
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/purushothaman-v-/',
    color: 'from-blue-500 to-blue-600'
  }, {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/purushothaman-pro',
    color: 'from-gray-700 to-gray-800'
  }, {
    icon: Code2,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/msmrAg4obh',
    color: 'from-orange-500 to-orange-600'
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Here you would typically send the data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="section-padding bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-heading font-bold text-gradient mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having a conversation 
            about engineering and technology. Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => <Card key={index} className="border-0 bg-gradient-to-r from-card to-primary/5 card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-primary to-primary-glow text-white">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{info.label}</p>
                          {info.href ? <a href={info.href} className="text-primary hover:text-primary-glow transition-colors">
                              {info.value}
                            </a> : <p className="text-foreground/80">{info.value}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Connect With Me
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {socialLinks.map((social, index) => <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                    <Card className="border-0 bg-gradient-to-r from-card to-accent/5 card-hover">
                      <CardContent className="p-4 text-center">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${social.color} text-white mx-auto w-fit mb-3 group-hover:scale-110 transition-transform`}>
                          <social.icon className="h-5 w-5" />
                        </div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                      </CardContent>
                    </Card>
                  </a>)}
              </div>
            </div>

            {/* Call to Action */}
            <Card className="border-0 bg-gradient-to-r from-accent/10 to-primary/10">
              
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="border-0 bg-gradient-to-br from-card to-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">
                        Name *
                      </Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="border-border bg-background" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">
                        Email *
                      </Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" required className="border-border bg-background" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground font-medium">
                      Subject *
                    </Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What would you like to discuss?" required className="border-border bg-background" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground font-medium">
                      Message *
                    </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or inquiry..." required rows={6} className="border-border bg-background resize-none" />
                  </div>

                  <Button type="submit" className="w-full btn-hero" disabled={isSubmitting}>
                    {isSubmitting ? <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </> : <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
