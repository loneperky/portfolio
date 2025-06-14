import { Users, Target, Zap, Award, Check } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Team background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="text-gradient">Otaxtech</span>
              </h1>
              <p className="text-xl text-gray-300">
                We're a team of passionate technologists dedicated to creating innovative solutions for businesses of all sizes.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-dark-600">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <img 
                src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Our office" 
                className="rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <SectionTitle title="Our Story" light />
              <p className="text-gray-300 mb-6">
                Founded in 2020, Otaxtech began as a small team of developers with a shared vision: to make cutting-edge technology accessible to businesses of all sizes.
              </p>
              <p className="text-gray-300 mb-6">
                Over the years, we've grown into a full-service technology company, expanding our expertise across web development, AI solutions, cloud hosting, and IT consulting. Our journey has been marked by continuous learning, innovation, and a steadfast commitment to delivering exceptional results for our clients.
              </p>
              <p className="text-gray-300">
                Today, we're proud to serve clients across various industries, helping them leverage technology to drive growth, improve efficiency, and stay ahead of the competition.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-dark-700">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card p-8 h-full">
                <div className="bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-400">
                  To empower businesses through innovative technology solutions that drive growth, efficiency, and competitive advantage.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card p-8 h-full">
                <div className="bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
                <p className="text-gray-400">
                  To be the leading technology partner for businesses worldwide, known for our innovation, expertise, and exceptional customer service.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card p-8 h-full">
                <div className="bg-primary-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Our Values</h3>
                <ul className="text-gray-400 space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary-500 mr-2" />
                    <span>Excellence in everything we do</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary-500 mr-2" />
                    <span>Innovation and continuous learning</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary-500 mr-2" />
                    <span>Client-focused approach</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-primary-500 mr-2" />
                    <span>Integrity and transparency</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-dark-600">
        <div className="container-custom">
          <SectionTitle 
            title="Meet Our Team" 
            subtitle="The talented people behind Otaxtech who make the magic happen."
            centered
            light
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Sarah Johnson" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Otasowie Christian</h3>
                  <p className="text-primary-400 mb-3">CEO & Founder</p>
                  <p className="text-gray-400 text-sm">
                    3+ years of experience in tech leadership and innovation.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.2}>
              <div className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="David Chen" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">David Chen</h3>
                  <p className="text-primary-400 mb-3">CTO</p>
                  <p className="text-gray-400 text-sm">
                    Expert in AI and cloud architecture with a focus on scalable solutions.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.3}>
              <div className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Michael Rodriguez" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Michael Rodriguez</h3>
                  <p className="text-primary-400 mb-3">Lead Developer</p>
                  <p className="text-gray-400 text-sm">
                    Full-stack developer specializing in complex web applications.
                  </p>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <div className="card overflow-hidden group">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Emily Wong" 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold">Emily Wong</h3>
                  <p className="text-primary-400 mb-3">UX/UI Designer</p>
                  <p className="text-gray-400 text-sm">
                    Creating intuitive and beautiful user experiences for all platforms.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;