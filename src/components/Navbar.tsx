import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X, Brain, History, Settings, LogOut, Sun, Moon } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2" onClick={closeMenu}>
              <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Acade</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <NavLink 
              to="/ask" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              Ask
            </NavLink>
            <NavLink 
              to="/history" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              History
            </NavLink>
            <NavLink 
              to="/settings" 
              className={({ isActive }) => isActive ? 'nav-link-active' : 'nav-link'}
            >
              Settings
            </NavLink>
            <button 
              onClick={toggleTheme} 
              className="p-2 ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button 
              onClick={handleLogout} 
              className="flex items-center space-x-1 nav-link text-red-600 dark:text-red-400"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme} 
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-expanded={isMenuOpen}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/ask"
              className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-md ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
              onClick={closeMenu}
            >
              <Brain className="h-5 w-5" />
              <span>Ask</span>
            </NavLink>
            <NavLink
              to="/history"
              className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-md ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
              onClick={closeMenu}
            >
              <History className="h-5 w-5" />
              <span>History</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) => 
                `flex items-center space-x-2 px-3 py-2 rounded-md ${
                  isActive 
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' 
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
              onClick={closeMenu}
            >
              <Settings className="h-5 w-5" />
              <span>Settings</span>
            </NavLink>
            <button
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;