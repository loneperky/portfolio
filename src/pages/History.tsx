import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Search, ExternalLink, Clock, Calendar, Book, Sparkles } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface HistoryItem {
  id: string;
  question: string;
  answer: string;
  type: 'question' | 'essay';
  timestamp: string;
}

const History = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    // Load history from localStorage (would be API call in real app)
    const savedHistory = JSON.parse(localStorage.getItem('acade_history') || '[]');
    setHistory(savedHistory);
  }, []);

  const deleteItem = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    localStorage.setItem('acade_history', JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    if (window.confirm('Are you sure you want to clear your entire history? This cannot be undone.')) {
      setHistory([]);
      localStorage.setItem('acade_history', JSON.stringify([]));
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const filteredHistory = history.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">History</h1>
          <p className="text-gray-600 dark:text-gray-300">
            View and manage your past questions and responses.
          </p>
        </div>
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="btn-outline text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/50 hover:bg-red-50 dark:hover:bg-red-900/30"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            Clear All
          </button>
        )}
      </div>

      {history.length > 0 ? (
        <>
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="input pl-10"
              placeholder="Search your history..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {filteredHistory.length > 0 ? (
            <div className="space-y-4">
              {filteredHistory.map((item) => (
                <div 
                  key={item.id} 
                  className="card border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {item.type === 'question' ? (
                          <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                        ) : (
                          <Book className="h-4 w-4 text-purple-600 dark:text-purple-400 mr-2" />
                        )}
                        <span className="font-medium text-sm text-gray-600 dark:text-gray-400">
                          {item.type === 'question' ? 'Question' : 'Essay'}
                        </span>
                        <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                        <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Calendar className="h-3 w-3 mr-1" />
                          {formatDate(item.timestamp)}
                        </span>
                        <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                        <span className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          {formatTime(item.timestamp)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                        {item.question}
                      </h3>
                      
                      {expandedItem === item.id ? (
                        <div className="mt-4 prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown>{item.answer}</ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                          {item.answer.replace(/[#*`]/g, '').substring(0, 150)}...
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-col space-y-2 ml-4">
                      <button
                        onClick={() => deleteItem(item.id)}
                        className="p-2 text-gray-500 hover:text-red-500 dark:text-gray-400 dark:hover:text-red-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                      <Link
                        to={`/ask?type=${item.type}`}
                        state={{ question: item.question }}
                        className="p-2 text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
                        aria-label="Reuse question"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <button
                      onClick={() => toggleExpand(item.id)}
                      className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none"
                    >
                      {expandedItem === item.id ? 'Show less' : 'Show more'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card text-center py-12 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-500 dark:text-gray-400 mb-4">No results found for "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="btn-primary"
              >
                Clear search
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="card text-center py-12 border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2">No history yet</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Your question and essay history will appear here once you start using Acade.
          </p>
          <Link to="/ask" className="btn-primary inline-flex items-center">
            <Search className="h-4 w-4 mr-2" />
            Ask your first question
          </Link>
        </div>
      )}
    </div>
  );
};

export default History;