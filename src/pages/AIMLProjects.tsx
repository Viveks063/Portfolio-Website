
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowLeft, Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

const AIMLProjects = () => {
  const aimlProjects = [
    {
      title: 'Youtube Video Downloader',
      description: 'AI-powered tool to download YouTube videos with automatic quality selection',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop',
      tech: ['Python', 'AI', 'YouTube API'],
      github: '#',
      live: '#'
    },
    {
      title: 'Spanish Chatbot',
      description: 'Conversational AI chatbot trained specifically for Spanish language interactions',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop',
      tech: ['Python', 'NLP', 'TensorFlow'],
      github: '#',
      live: '#'
    },
    {
      title: 'Image Captioning with Blip',
      description: 'Advanced image captioning system using BLIP model for accurate descriptions',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&h=300&fit=crop',
      tech: ['Python', 'BLIP', 'Computer Vision'],
      github: '#',
      live: '#'
    },
    {
      title: 'Movie Recommendation',
      description: 'Intelligent movie recommendation system based on user preferences and behavior',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=500&h=300&fit=crop',
      tech: ['Python', 'Machine Learning', 'Collaborative Filtering'],
      github: '#',
      live: '#'
    },
    {
      title: 'House Price Prediction',
      description: 'ML model to predict house prices based on location, features, and market trends',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=300&fit=crop',
      tech: ['Python', 'Regression', 'Scikit-learn'],
      github: '#',
      live: '#'
    },
    {
      title: 'Next Word Prediction using LSTM',
      description: 'Deep learning model using LSTM networks for intelligent text completion',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop',
      tech: ['Python', 'LSTM', 'Keras'],
      github: '#',
      live: '#'
    },
    {
      title: 'Face Detection Model',
      description: 'Real-time face detection system with high accuracy and performance',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop',
      tech: ['Python', 'OpenCV', 'Deep Learning'],
      github: '#',
      live: '#'
    },
    {
      title: 'Real Time Image Captioning',
      description: 'Live image captioning system that generates descriptions in real-time',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop',
      tech: ['Python', 'CNN', 'Real-time Processing'],
      github: '#',
      live: '#'
    },
    {
      title: 'Gesture Math Solver',
      description: 'AI system that solves mathematical equations drawn using hand gestures',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop',
      tech: ['Python', 'Computer Vision', 'Gesture Recognition'],
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
              <Brain className="text-primary" size={24} />
              <h1 className="text-3xl font-bold">AI/ML Projects</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xl text-muted-foreground">
              Artificial Intelligence and Machine Learning projects showcasing advanced algorithms
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aimlProjects.map((project, index) => (
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

export default AIMLProjects;
