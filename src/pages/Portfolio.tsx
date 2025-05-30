import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

// Define project types for filtering
type ProjectCategory = 'all' | 'web' | 'ai' | 'mobile' | 'cloud';

// Project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'web',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A modern e-commerce platform with product management, payment processing, and order tracking.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    link: '#',
    github: '#'
  },
  {
    id: 2,
    title: 'AI Analytics Dashboard',
    category: 'ai',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Advanced analytics platform using machine learning to provide predictive insights for business decision-making.',
    technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
    link: '#',
    github: '#'
  },
  {
    id: 3,
    title: 'Healthcare Management System',
    category: 'web',
    image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Secure healthcare platform for managing patient records, appointments, and billing.',
    technologies: ['Angular', 'Java', 'PostgreSQL', 'Docker'],
    link: '#',
    github: '#'
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    category: 'mobile',
    image: 'https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Mobile application for tracking workouts, nutrition, and health goals with social features.',
    technologies: ['React Native', 'Firebase', 'Redux'],
    link: '#',
    github: '#'
  },
  {
    id: 5,
    title: 'Cloud Infrastructure Migration',
    category: 'cloud',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Migration of on-premises infrastructure to cloud-based solutions for improved scalability and reliability.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    link: '#',
    github: '#'
  },
  {
    id: 6,
    title: 'Smart Home Automation',
    category: 'ai',
    image: 'https://images.pexels.com/photos/4352249/pexels-photo-4352249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'IoT-based smart home system with AI-powered automation and voice control capabilities.',
    technologies: ['IoT', 'TensorFlow', 'Node.js', 'React'],
    link: '#',
    github: '#'
  }
];

const Portfolio = () => {
  const [filter, setFilter] = useState<ProjectCategory>('all');
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Portfolio background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-gray-300">
                Explore our past projects and see how we've helped businesses achieve their technology goals.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-dark-600">
        <div className="container-custom">
          <SectionTitle 
            title="Our Work" 
            subtitle="Browse through our projects and discover what we can do for your business."
            centered
            light
          />
          
          {/* Filter Tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'all'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setFilter('web')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'web'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                }`}
              >
                Web Development
              </button>
              <button
                onClick={() => setFilter('ai')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'ai'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                }`}
              >
                AI Solutions
              </button>
              <button
                onClick={() => setFilter('mobile')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'mobile'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                }`}
              >
                Mobile Apps
              </button>
              <button
                onClick={() => setFilter('cloud')}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === 'cloud'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-500 text-gray-300 hover:bg-dark-400'
                }`}
              >
                Cloud Solutions
              </button>
            </div>
          </AnimatedSection>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection delay={index * 0.1} key={project.id}>
                <div className="card overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-dark-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-primary-600 rounded-full hover:bg-primary-500 transition-colors"
                          aria-label="Visit live site"
                        >
                          <ExternalLink className="h-5 w-5 text-white" />
                        </a>
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-2 bg-dark-500 rounded-full hover:bg-dark-400 transition-colors"
                          aria-label="View code on GitHub"
                        >
                          <Github className="h-5 w-5 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 text-xs bg-dark-400 rounded-full text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-dark-700">
        <div className="container-custom">
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="What our clients say about working with us."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">John Wilson</h4>
                    <p className="text-primary-400 text-sm">CEO, TechStart Inc.</p>
                  </div>
                </div>
                <p className="text-gray-400 italic">
                  "Otaxtech transformed our outdated systems into a modern, efficient platform. Their team was professional, responsive, and delivered beyond our expectations."
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Samantha Lee</h4>
                    <p className="text-primary-400 text-sm">Marketing Director, GrowthMax</p>
                  </div>
                </div>
                <p className="text-gray-400 italic">
                  "The AI-powered analytics dashboard Otaxtech built for us has completely changed how we make decisions. The insights we've gained have been invaluable."
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                      alt="Client" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Robert Chen</h4>
                    <p className="text-primary-400 text-sm">CTO, HealthPlus</p>
                  </div>
                </div>
                <p className="text-gray-400 italic">
                  "Working with Otaxtech on our healthcare management system was a pleasure. Their attention to detail and focus on security was exactly what we needed."
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;