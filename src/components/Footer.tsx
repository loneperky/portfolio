import { Link } from 'react-router-dom';
import { Laptop, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-800 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-white mb-4">
              <Laptop className="h-8 w-8 text-primary-500" />
              <span>Otax<span className="text-primary-500">tech</span></span>
            </Link>
            <p className="mb-4 text-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions that drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-primary-400 transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">AI Solutions</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">Cloud Hosting</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">IT Consulting</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">Mobile Apps</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary-400 transition-colors">Cybersecurity</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                <span>123 Tech Boulevard, Digital City, Benin City</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <span>+234 912 678 5031</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <a href="mailto:info@otaxtech.com" className="hover:text-primary-400 transition-colors">
                  info@otaxtech.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-400 mt-10 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">
            &copy; {currentYear} Otaxtech. All rights reserved.
          </p>
          {/* <div className="flex space-x-6 text-sm">
            <Link to="/privacy" className="hover:text-primary-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary-400 transition-colors">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="hover:text-primary-400 transition-colors">
              Sitemap
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;