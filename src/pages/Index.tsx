import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Instagram, Mail, MapPin, Download, ExternalLink, Menu, X, ChevronDown, Code, Sparkles, Zap, Smartphone, Globe, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [typedText, setTypedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const fullName = "Vivek Suvarna";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullName.length) {
        setTypedText(fullName.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        // Hide cursor after typing is complete
        setTimeout(() => {
          setShowCursor(false);
        }, 1000); // Wait 1 second after typing completes, then hide cursor
      }
    }, 150);
    return () => clearInterval(timer);
  }, []);

  const skills = ['Java', 'Kotlin', 'AI/ML', 'TensorFlow', 'Python', 'Android Development', 'Web Development'];
  const projects = [{
    title: 'E-Commerce Mobile App',
    description: 'A full-featured shopping app built with Kotlin and Jetpack Compose',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase'],
    github: '#',
    live: '#'
  }, {
    title: 'AI-Powered Chat Bot',
    description: 'Intelligent chatbot using natural language processing',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
    tech: ['Python', 'TensorFlow', 'React'],
    github: '#',
    live: '#'
  }, {
    title: 'Task Management Dashboard',
    description: 'Modern project management tool with real-time collaboration',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    live: '#'
  }, {
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness app with workout plans and progress tracking',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop',
    tech: ['React Native', 'Firebase', 'HealthKit'],
    github: '#',
    live: '#'
  }, {
    title: 'Weather Analytics Platform',
    description: 'Real-time weather data visualization with predictive analytics',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
    tech: ['Python', 'Django', 'Chart.js'],
    github: '#',
    live: '#'
  }, {
    title: 'Social Media Dashboard',
    description: 'Unified social media management platform',
    image: 'https://images.unsplash.com/photo-1611262588024-d12430b98920?w=500&h=300&fit=crop',
    tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
    github: '#',
    live: '#'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMenuOpen(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const templateParams = {
      from_name: formData.get('name'),
      from_email: formData.get('email'),
      message: formData.get('message')
    };
    console.log('Sending email with params:', templateParams);
    try {
      const result = await emailjs.send('service_0lb4rul',
      // Your Service ID
      'template_0fr98na',
      // Your Template ID
      templateParams, 'G_sPs-3L31gdw3oKE' // Your correct Public Key
      );
      console.log('EmailJS result:', result);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      form.reset();
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-primary">VS</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              {['Home', 'About', 'Projects', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-purple-500/5"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-primary rotate-45 animate-bounce"></div>
        <div className="absolute bottom-32 right-40 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-16 w-2 h-2 bg-purple-500 animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-fade-in">
            {/* Enhanced Title */}
            <div className="mb-4 flex justify-center items-center space-x-4">
              <div className="flex items-center space-x-2 text-primary">
                <Code size={24} className="animate-bounce" />
                <Sparkles size={20} className="animate-pulse" />
                <Zap size={22} className="animate-bounce delay-500" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="text-primary relative inline-block">
                {typedText}
                {showCursor && <span className="animate-blink text-primary">|</span>}
              </span>
            </h1>
            
            {/* Enhanced Subtitle */}
            <div className="mb-8 space-y-4">
              <p className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Software Developer | App Creator | AI Enthusiast
              </p>
              <div className="flex justify-center items-center space-x-6 text-sm md:text-base text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span>Available for projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={16} />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </div>

            {/* Tech Stack Preview */}
            <div className="max-w-2xl mx-auto mb-8">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider font-semibold">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.slice(0, 4).map((skill, index) => (
                  <Badge key={index} variant="secondary" className="px-4 py-2 text-sm font-medium bg-card/50 border border-border/50 hover:bg-primary/10 transition-colors duration-300">
                    {skill}
                  </Badge>
                ))}
                <Badge variant="outline" className="px-4 py-2 text-sm font-medium border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300">
                  +{skills.length - 4} more
                </Badge>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
            <ChevronDown className="text-primary" size={24} />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Hello, I'm <span className="text-primary">Vivek</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Computer Science student with a strong interest in Software Development, Artificial Intelligence, Machine Learning, and Android app development.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Continuously learning and growing in the field of AI and mobile development.
              </p>
              
              {/* Skills */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Badge key={index} variant="secondary" className="px-3 py-1 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="https://github.com/Viveks063" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/vivek-suvarna-7b7047259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlFW4eqzMSPa9XsINSfcX5w%3D%3D" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1682685797497-f296491f82b1?w=500&h=500&fit=crop"
                alt="About Me"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Updated Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my work across different technologies and domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Android Projects Card */}
            <Link to="/android-projects">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border cursor-pointer h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Smartphone className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Android Projects</h3>
                  <p className="text-muted-foreground mb-6">
                    Mobile applications built with Kotlin, Java, and modern Android development frameworks
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="outline" className="text-xs">Kotlin</Badge>
                    <Badge variant="outline" className="text-xs">Jetpack Compose</Badge>
                    <Badge variant="outline" className="text-xs">Firebase</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Web Projects Card */}
            <Link to="/web-projects">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border cursor-pointer h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Globe className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Web Projects</h3>
                  <p className="text-muted-foreground mb-6">
                    Full-stack web applications using modern frameworks and technologies
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="outline" className="text-xs">React</Badge>
                    <Badge variant="outline" className="text-xs">Node.js</Badge>
                    <Badge variant="outline" className="text-xs">Python</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* AI/ML Projects Card */}
            <Link to="/ai-ml-projects">
              <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border cursor-pointer h-full">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Brain className="mx-auto text-primary group-hover:scale-110 transition-transform duration-300" size={48} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">AI/ML Projects</h3>
                  <p className="text-muted-foreground mb-6">
                    Artificial Intelligence and Machine Learning projects with advanced algorithms
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="outline" className="text-xs">Python</Badge>
                    <Badge variant="outline" className="text-xs">TensorFlow</Badge>
                    <Badge variant="outline" className="text-xs">PyTorch</Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="text-primary" size={20} />
                    <span>viveksuvarna063@email.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="text-primary" size={20} />
                    <span>Mumbai, India</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com/Viveks063" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://www.linkedin.com/in/vivek-suvarna-7b7047259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BlFW4eqzMSPa9XsINSfcX5w%3D%3D" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://instagram.com" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>

              <Button className="flex items-center gap-2 bg-primary hover:bg-primary/90">
                <Download size={16} />
                Download Resume
              </Button>
            </div>

            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" name="name" placeholder="Your Name" className="bg-background border-border" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input id="email" name="email" type="email" placeholder="your.email@example.com" className="bg-background border-border" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={4} className="bg-background border-border" required />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Vivek Suvarna. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
