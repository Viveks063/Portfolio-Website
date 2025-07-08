import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowLeft, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const WebProjects = () => {
  const webProjects = [
    {
      title: 'To Do List',
      description: 'Task management application to organize and track daily activities',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Viveks063/To-do-list',
      live: '#'
    },
    {
      title: 'Age Calculator',
      description: 'Simple web application to calculate age based on date of birth',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      tech: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Viveks063/Age-Calculator',
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
              <Globe className="text-primary" size={24} />
              <h1 className="text-3xl font-bold">Web Projects</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground">
              Web applications built with modern frontend and backend technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-card border-border">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300" 
                  />
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
                        Live Demo
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

export default WebProjects;
