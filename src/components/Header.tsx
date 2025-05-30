import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Laptop } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md transition-colors duration-300 ${
      isActive
        ? 'text-white font-medium'
        : 'text-gray-300 hover:text-white'
    }`;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-700/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-xl font-bold text-white"
          >
            <Laptop className="h-8 w-8 text-primary-500" />
            <span>Otax<span className="text-primary-500">tech</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/" className={navLinkClasses} end>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>
            <NavLink to="/services" className={navLinkClasses}>
              Services
            </NavLink>
            <NavLink to="/portfolio" className={navLinkClasses}>
              Portfolio
            </NavLink>
            <NavLink to="/blog" className={navLinkClasses}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact
            </NavLink>
            <Link
              to="/contact"
              className="ml-4 btn btn-primary px-4 py-2 rounded-md"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-200 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 py-4 bg-dark-600 rounded-lg">
            <div className="flex flex-col space-y-2 px-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? 'bg-dark-500 text-white' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
                end
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? 'bg-dark-500 text-white' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? 'bg-dark-500 text-white' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Services
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? 'bg-dark-500 text-white' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? 'bg-dark-500 text-white' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Blog
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md ${
                    isActive ? 'bg-dark-500 text-white' : 'text-gray-300'
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
              <Link
                to="/contact"
                className="btn btn-primary px-4 py-2 rounded-md text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;