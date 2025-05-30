import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-600 px-4">
      <AnimatedSection>
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="btn btn-primary px-6 py-3 rounded-md inline-flex items-center"
          >
            <Home className="mr-2 h-5 w-5" /> 
            Back to Home
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default NotFound;