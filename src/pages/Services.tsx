import { Link } from 'react-router-dom';
import { Monitor, Database, Server, Code, Globe, Cpu, Shield, Smartphone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies to meet your specific business needs.",
      icon: <Globe className="h-12 w-12 text-primary-500" />,
      features: [
        "Responsive designs for all devices",
        "E-commerce functionality",
        "Content management systems",
        "Progressive web applications"
      ]
    },
    {
      id: 2,
      title: "AI Solutions",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and enhance decision-making.",
      icon: <Cpu className="h-12 w-12 text-primary-500" />,
      features: [
        "Machine learning models",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision applications"
      ]
    },
    {
      id: 3,
      title: "Cloud Hosting",
      description: "Reliable, scalable cloud hosting solutions to ensure your applications are always available and performing optimally.",
      icon: <Server className="h-12 w-12 text-primary-500" />,
      features: [
        "Auto-scaling infrastructure",
        "Load balancing",
        "Disaster recovery",
        "24/7 monitoring"
      ]
    },
    {
      id: 4,
      title: "IT Consulting",
      description: "Strategic technology consulting to help your business make informed decisions and leverage the right tools.",
      icon: <Monitor className="h-12 w-12 text-primary-500" />,
      features: [
        "Technology roadmap planning",
        "Digital transformation strategies",
        "Software selection assistance",
        "IT infrastructure assessment"
      ]
    },
    {
      id: 5,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: <Smartphone className="h-12 w-12 text-primary-500" />,
      features: [
        "iOS and Android development",
        "Cross-platform solutions",
        "Mobile UI/UX design",
        "App store optimization"
      ]
    },
    {
      id: 6,
      title: "Database Solutions",
      description: "Robust database design, development, and optimization services to ensure your data is secure and efficient.",
      icon: <Database className="h-12 w-12 text-primary-500" />,
      features: [
        "Database architecture",
        "Performance optimization",
        "Data migration",
        "Backup and recovery solutions"
      ]
    },
    {
      id: 7,
      title: "Custom Software Development",
      description: "Tailor-made software solutions designed to address your specific business challenges and opportunities.",
      icon: <Code className="h-12 w-12 text-primary-500" />,
      features: [
        "Enterprise applications",
        "Workflow automation",
        "Integration solutions",
        "Legacy system modernization"
      ]
    },
    {
      id: 8,
      title: "Cybersecurity",
      description: "Protect your business from threats with comprehensive cybersecurity solutions and best practices.",
      icon: <Shield className="h-12 w-12 text-primary-500" />,
      features: [
        "Security assessments",
        "Penetration testing",
        "Compliance consulting",
        "Security awareness training"
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-gray-300">
                Comprehensive technology solutions tailored to meet your business needs and help you stay ahead of the competition.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-dark-600">
        <div className="container-custom">
          <SectionTitle 
            title="What We Offer" 
            subtitle="Explore our range of services designed to help your business thrive in the digital age."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection delay={index * 0.1} key={service.id}>
                <div className="card p-8">
                  <div className="flex items-start">
                    <div className="bg-primary-900/50 p-3 rounded-lg mr-4 flex-shrink-0">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                      
                      <h4 className="text-lg font-medium mb-2 text-white">Key Features:</h4>
                      <ul className="text-gray-400 space-y-2 mb-4">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-primary-500 mr-2">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-dark-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-200 mb-8 text-lg">
                Contact us today to discuss how our technology solutions can help your business grow, improve efficiency, and stay ahead of the competition.
              </p>
              <Link to="/contact" className="btn btn-primary px-8 py-3 rounded-md text-base">
                Get in Touch
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;