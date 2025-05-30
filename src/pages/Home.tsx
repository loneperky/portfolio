import { ArrowRight, Code, Globe, Server, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="Technology background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/90 to-dark-800/70 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Powering <span className="text-gradient">Innovation</span> Through Technology
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                We transform ideas into powerful digital solutions that help businesses thrive in the digital age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary px-8 py-3 rounded-md text-base">
                  Get Started
                </Link>
                <Link to="/services" className="btn btn-ghost px-8 py-3 rounded-md text-base flex items-center">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <a href="#services" className="text-gray-400 hover:text-white">
            <ChevronRight className="h-8 w-8 rotate-90" />
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-dark-600">
        <div className="container-custom">
          <SectionTitle 
            title="Our Services" 
            subtitle="Comprehensive technology solutions designed to meet your business needs."
            centered
            light
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card p-6">
                <div className="bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                <p className="text-gray-400 mb-4">Responsive websites and web applications tailored to your brand and business needs.</p>
                <Link to="/services" className="text-primary-400 hover:text-primary-300 inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card p-6">
                <div className="bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Solutions</h3>
                <p className="text-gray-400 mb-4">Leverage AI and machine learning to automate processes and gain business insights.</p>
                <Link to="/services" className="text-primary-400 hover:text-primary-300 inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card p-6">
                <div className="bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Server className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cloud Hosting</h3>
                <p className="text-gray-400 mb-4">Scalable, secure cloud hosting solutions to keep your applications running smoothly.</p>
                <Link to="/services" className="text-primary-400 hover:text-primary-300 inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="card p-6">
                <div className="bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Code className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">IT Consulting</h3>
                <p className="text-gray-400 mb-4">Strategic technology consulting to help your business leverage the right tools.</p>
                <Link to="/services" className="text-primary-400 hover:text-primary-300 inline-flex items-center">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/services" className="btn btn-secondary px-6 py-3 rounded-md inline-flex items-center">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-dark-700 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Our team collaborating" 
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-lg hidden md:block"></div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  We're More Than <span className="text-gradient">Just Tech</span>
                </h2>
                <p className="text-gray-300 mb-6">
                  Founded in 2020, Otaxtech has quickly become a leader in providing innovative technology solutions to businesses worldwide. Our team of experienced developers, designers, and consultants work together to deliver exceptional results.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <span className="bg-primary-900/50 p-1 rounded mr-2 text-primary-400">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                    <span className="text-gray-300">Dedicated team of expert professionals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900/50 p-1 rounded mr-2 text-primary-400">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                    <span className="text-gray-300">Client-focused approach to every project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-primary-900/50 p-1 rounded mr-2 text-primary-400">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                    <span className="text-gray-300">Continuous learning and innovation culture</span>
                  </li>
                </ul>
                <Link to="/about" className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview */}
      <section className="section-padding bg-dark-600">
        <div className="container-custom">
          <SectionTitle 
            title="Our Latest Work" 
            subtitle="Check out some of our recent projects that showcase our expertise and creativity."
            centered
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Project 1" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
                  <p className="text-gray-400 mb-4">A custom e-commerce solution with integrated payment processing and inventory management.</p>
                  <Link to="/portfolio" className="text-primary-400 hover:text-primary-300 inline-flex items-center">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Project 2" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">AI Analytics Dashboard</h3>
                  <p className="text-gray-400 mb-4">An advanced analytics platform using AI to provide actionable insights for business decision-making.</p>
                  <Link to="/portfolio" className="text-primary-400 hover:text-primary-300 inline-flex items-center">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Project 3" 
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Healthcare Management System</h3>
                  <p className="text-gray-400 mb-4">A comprehensive solution for healthcare providers to manage patient data securely.</p>
                  <Link to="/portfolio" className="text-primary-400 hover:text-primary-300 inline-flex items-center">
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/portfolio" className="btn btn-secondary px-6 py-3 rounded-md inline-flex items-center">
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-dark-700">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business with Technology?
              </h2>
              <p className="text-gray-200 mb-8 text-lg">
                Whether you need a new website, AI integration, cloud hosting, or IT consulting services, our team is here to help. Let's discuss how we can help you achieve your goals.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/contact" className="btn btn-primary px-8 py-3 rounded-md text-base">
                  Contact Us Today
                </Link>
                <Link to="/services" className="btn bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-md text-base flex items-center">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;