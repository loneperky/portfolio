import { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';

// Blog post data
const posts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends to Watch',
    excerpt: 'Artificial intelligence is transforming how businesses operate. Here are the key trends to watch in the coming years.',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'May 15, 2025',
    author: 'David Chen',
    category: 'AI',
    slug: 'future-of-ai-in-business'
  },
  {
    id: 2,
    title: 'Building Scalable Web Applications with Modern Frameworks',
    excerpt: 'Learn how to create web applications that can scale to millions of users using modern frameworks and architecture patterns.',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'May 8, 2025',
    author: 'Michael Rodriguez',
    category: 'Web Development',
    slug: 'building-scalable-web-applications'
  },
  {
    id: 3,
    title: 'Cloud Migration: Best Practices for a Smooth Transition',
    excerpt: 'Moving your infrastructure to the cloud? Follow these best practices to ensure a smooth and successful migration.',
    image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 30, 2025',
    author: 'Sarah Johnson',
    category: 'Cloud',
    slug: 'cloud-migration-best-practices'
  },
  {
    id: 4,
    title: 'Cybersecurity Essentials for Small Businesses',
    excerpt: 'Small businesses are increasingly targeted by cyberattacks. Learn the essential security measures every business should implement.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 22, 2025',
    author: 'James Wilson',
    category: 'Cybersecurity',
    slug: 'cybersecurity-essentials-small-businesses'
  },
  {
    id: 5,
    title: 'The Rise of Progressive Web Apps (PWAs)',
    excerpt: 'Progressive Web Apps combine the best of web and mobile apps. Discover why they\'re becoming increasingly popular.',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 15, 2025',
    author: 'Emily Wong',
    category: 'Web Development',
    slug: 'rise-of-progressive-web-apps'
  },
  {
    id: 6,
    title: 'Machine Learning for Customer Segmentation',
    excerpt: 'How to use machine learning algorithms to segment your customers and deliver personalized experiences.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 7, 2025',
    author: 'David Chen',
    category: 'AI',
    slug: 'machine-learning-customer-segmentation'
  }
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = searchTerm
    ? posts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : posts;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img 
            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Blog background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 z-10"></div>
        </div>
        
        <div className="container-custom relative z-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Otaxtech <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-gray-300">
                Insights, tips, and news from the world of technology and innovation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Content */}
      <section className="section-padding bg-dark-600">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <AnimatedSection>
                {/* Search */}
                <div className="mb-10">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search articles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-4 py-3 pl-12 bg-dark-500 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              
                {/* Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredPosts.map((post, index) => (
                    <AnimatedSection delay={index * 0.1} key={post.id}>
                      <article className="card group">
                        <div className="relative overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1">
                            {post.category}
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="flex items-center text-sm text-gray-400 mb-3">
                            <div className="flex items-center mr-4">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-semibold mb-3">
                            <Link to={`/blog/${post.slug}`} className="hover:text-primary-400 transition-colors">
                              {post.title}
                            </Link>
                          </h3>
                          <p className="text-gray-400 mb-4">
                            {post.excerpt}
                          </p>
                          <Link 
                            to={`/blog/${post.slug}`} 
                            className="text-primary-400 hover:text-primary-300 inline-flex items-center"
                          >
                            Read More <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </article>
                    </AnimatedSection>
                  ))}
                </div>
                
                {filteredPosts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-400 text-lg">No articles found matching your search.</p>
                  </div>
                )}
                
                {/* Pagination */}
                {filteredPosts.length > 0 && !searchTerm && (
                  <div className="mt-12 flex justify-center">
                    <nav className="flex space-x-2">
                      <button className="px-4 py-2 rounded-md bg-primary-600 text-white font-medium">1</button>
                      <button className="px-4 py-2 rounded-md bg-dark-500 text-gray-300 hover:bg-dark-400">2</button>
                      <button className="px-4 py-2 rounded-md bg-dark-500 text-gray-300 hover:bg-dark-400">3</button>
                      <span className="px-4 py-2 text-gray-400">...</span>
                    </nav>
                  </div>
                )}
              </AnimatedSection>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <AnimatedSection delay={0.2}>
                {/* Categories */}
                <div className="card p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <button 
                        onClick={() => setSearchTerm('Web Development')} 
                        className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                      >
                        <span className="text-primary-500 mr-2">•</span>
                        Web Development
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setSearchTerm('AI')} 
                        className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                      >
                        <span className="text-primary-500 mr-2">•</span>
                        Artificial Intelligence
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setSearchTerm('Cloud')} 
                        className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                      >
                        <span className="text-primary-500 mr-2">•</span>
                        Cloud Computing
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setSearchTerm('Cybersecurity')} 
                        className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                      >
                        <span className="text-primary-500 mr-2">•</span>
                        Cybersecurity
                      </button>
                    </li>
                    <li>
                      <button 
                        onClick={() => setSearchTerm('Mobile')} 
                        className="text-gray-300 hover:text-primary-400 transition-colors flex items-center"
                      >
                        <span className="text-primary-500 mr-2">•</span>
                        Mobile Development
                      </button>
                    </li>
                  </ul>
                </div>
                
                {/* Recent Posts */}
                <div className="card p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {posts.slice(0, 3).map(post => (
                      <div key={post.id} className="flex items-start">
                        <img 
                          src={post.image} 
                          alt={post.title} 
                          className="w-16 h-16 object-cover rounded mr-3"
                        />
                        <div>
                          <h4 className="font-medium hover:text-primary-400 transition-colors text-sm">
                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                          </h4>
                          <div className="text-xs text-gray-400 mt-1">
                            {post.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Stay updated with the latest technology news and insights.
                  </p>
                  <form className="space-y-3">
                    <div>
                      <input 
                        type="email" 
                        placeholder="Your email address" 
                        className="form-input"
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full py-2 rounded-md"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;