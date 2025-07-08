
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowLeft, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

const AndroidProjects = () => {
  const androidProjects = [
    {
      title: 'Temperature Converter',
      description: 'A simple and efficient temperature conversion app for Android',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['Android', 'Java/Kotlin'],
      github: 'https://github.com/Viveks063/Temperature-Converter',
      live: '#'
    },
    {
      title: 'Weather App',
      description: 'Real-time weather forecasting app with location-based updates',
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=500&h=300&fit=crop',
      tech: ['Android', 'Java', 'Weather API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness app with workout plans and progress tracking',
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=500&h=300&fit=crop',
      tech: ['Android', 'Kotlin', 'SQLite'],
      github: '#',
      live: '#'
    },
    {
      title: 'Railway Ticket App',
      description: 'Mobile application for booking and managing railway tickets',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      tech: ['Android', 'Java', 'Firebase'],
      github: '#',
      live: '#'
    },
    {
      title: 'Music Player App',
      description: 'Feature-rich music player with playlist management and audio controls',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tech: ['Android', 'Kotlin', 'MediaPlayer API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Alumnit',
      description: 'Social networking platform where alumni can connect and interact with each other',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      tech: ['Android', 'Java', 'Firebase', 'Social Features'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft size={16} className="mr-2" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <Smartphone className="text-primary" size={24} />
              <h1 className="text-3xl font-bold">Android Projects</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground">
              Mobile applications built with modern Android development technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {androidProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} className="flex items-center gap-2">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AndroidProjects;
