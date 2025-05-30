import { Link } from 'react-router-dom';
import { Brain, Search, BookOpen, History, Settings, ArrowRight, Lightbulb } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();
  
  const features = [
    {
      title: 'Ask Questions',
      description: 'Get AI-powered answers to your academic questions',
      icon: <Search className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      link: '/ask',
      color: 'bg-blue-50 dark:bg-blue-900/30',
    },
    {
      title: 'Write Essays',
      description: 'Generate well-structured academic content',
      icon: <BookOpen className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
      link: '/ask?type=essay',
      color: 'bg-purple-50 dark:bg-purple-900/30',
    },
    {
      title: 'View History',
      description: 'Access your past questions and answers',
      icon: <History className="h-8 w-8 text-teal-600 dark:text-teal-400" />,
      link: '/history',
      color: 'bg-teal-50 dark:bg-teal-900/30',
    },
    {
      title: 'Settings',
      description: 'Customize your Acade experience',
      icon: <Settings className="h-8 w-8 text-gray-600 dark:text-gray-400" />,
      link: '/settings',
      color: 'bg-gray-50 dark:bg-gray-800',
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome back, {user?.name.split(' ')[0] || 'Student'}!
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Your AI-powered academic assistant is ready to help with questions, essays, and more.
        </p>
      </div>

      {/* Quick search box */}
      <div className="card mb-8 border border-gray-200 dark:border-gray-700">
        <div className="flex items-center mb-4">
          <Brain className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
          <h2 className="text-xl font-semibold">Ask me anything</h2>
        </div>
        <Link to="/ask">
          <div className="relative">
            <input
              type="text"
              className="input pr-12"
              placeholder="Type your question here..."
              disabled
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ArrowRight className="h-5 w-5 text-gray-400" />
            </div>
          </div>
        </Link>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {features.map((feature, index) => (
          <Link
            key={index}
            to={feature.link}
            className={`card hover:shadow-md transition-all ${feature.color} border border-gray-200 dark:border-gray-700 flex`}
          >
            <div className="mr-4">{feature.icon}</div>
            <div>
              <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Tips section */}
      <div className="card bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-100 dark:border-blue-800">
        <div className="flex items-start md:items-center">
          <Lightbulb className="h-8 w-8 text-yellow-500 mr-4 flex-shrink-0 mt-1 md:mt-0" />
          <div>
            <h3 className="font-semibold text-lg mb-2">Pro Tip</h3>
            <p className="text-gray-700 dark:text-gray-300">
              For essay writing, try to be specific about your topic and requirements. Include details like word count, 
              academic level, and citation style for the best results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;