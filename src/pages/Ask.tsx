import { useState, FormEvent, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, Loader2, Book, Sparkles, RefreshCw, Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

type QuestionType = 'question' | 'essay';

const Ask = () => {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get('type') === 'essay' ? 'essay' : 'question';
  
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [questionType, setQuestionType] = useState<QuestionType>(initialType);
  
  const responseRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Adjust textarea height automatically
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [question]);

  // Scroll to response when it's ready
  useEffect(() => {
    if (response && responseRef.current) {
      responseRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [response]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');

    // Simulate API call to OpenAI
    try {
      // This would be replaced with actual API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock response
      let mockResponse = '';
      if (questionType === 'question') {
        mockResponse = generateMockQuestionResponse(question);
      } else {
        mockResponse = generateMockEssayResponse(question);
      }
      
      // Simulate streaming by adding characters gradually
      let currentResponse = '';
      for (let i = 0; i < mockResponse.length; i += 10) {
        currentResponse += mockResponse.slice(i, i + 10);
        setResponse(currentResponse);
        await new Promise(resolve => setTimeout(resolve, 20));
      }
      
      // Save to history (would be API call in real app)
      saveToHistory(question, mockResponse, questionType);
      
    } catch (error) {
      console.error('Error:', error);
      setResponse('Sorry, there was an error processing your request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateMockQuestionResponse = (q: string) => {
    // Very simple mock response generator
    return `## Answer to: ${q}\n\nThis is a simulated AI response that would typically provide a comprehensive answer to your academic question. The real implementation would connect to OpenAI's API to generate responses based on your specific query.\n\nSome key points that would be included:\n\n1. Direct answer to your specific question\n2. Relevant background information and context\n3. Examples to illustrate concepts\n4. Citations from academic sources when appropriate\n5. Further reading suggestions\n\nThe actual response would be much more detailed and tailored to your specific academic question.`;
  };

  const generateMockEssayResponse = (q: string) => {
    // Mock essay response
    return `# ${q.split('?')[0] || 'Essay Title'}\n\n## Introduction\n\nThis is a simulated essay introduction that would typically provide context and background information about the topic. The real implementation would generate a complete essay through OpenAI's API based on your specific requirements.\n\n## Main Body\n\n### Key Point 1\nThe first major argument or point would be developed here with supporting evidence, examples, and analysis.\n\n### Key Point 2\nThe second major argument would be presented here, building upon the previous point and advancing the overall thesis.\n\n### Key Point 3\nThe third key argument would provide additional depth and perspective on the topic.\n\n## Conclusion\n\nThis concluding section would summarize the main points discussed and provide final thoughts on the topic. It would reinforce the thesis and potentially suggest implications or areas for further research.\n\n## References\n\n1. Smith, J. (2022). *Title of relevant academic source*. Publisher.\n2. Johnson, A. & Brown, B. (2021). *Another relevant source*. Journal Name, 45(2), 123-145.\n\n*Note: This is a simulated response. The actual essay would be much more detailed, cohesive, and tailored to your specific requirements.*`;
  };

  const saveToHistory = (question: string, answer: string, type: QuestionType) => {
    // This would be an API call in the real app
    const historyItem = {
      id: Date.now().toString(),
      question,
      answer,
      type,
      timestamp: new Date().toISOString(),
    };
    
    // For demo purposes, save to localStorage
    const history = JSON.parse(localStorage.getItem('acade_history') || '[]');
    history.unshift(historyItem);
    localStorage.setItem('acade_history', JSON.stringify(history));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    setQuestion('');
    setResponse('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {questionType === 'question' ? 'Ask a Question' : 'Write an Essay'}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {questionType === 'question' 
            ? 'Get AI-powered answers to your academic questions.' 
            : 'Generate well-structured academic essays and content.'}
        </p>
      </div>

      <div className="card mb-6 border border-gray-200 dark:border-gray-700">
        <div className="flex mb-4">
          <button
            className={`flex items-center px-4 py-2 rounded-lg mr-3 ${
              questionType === 'question'
                ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setQuestionType('question')}
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Question
          </button>
          <button
            className={`flex items-center px-4 py-2 rounded-lg ${
              questionType === 'essay'
                ? 'bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
            onClick={() => setQuestionType('essay')}
          >
            <Book className="h-4 w-4 mr-2" />
            Essay
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              ref={textareaRef}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder={questionType === 'question' 
                ? "Type your academic question here..." 
                : "Describe the essay you want to generate (topic, length, style, etc.)..."
              }
              className="input min-h-[120px] resize-none"
              rows={4}
              disabled={isLoading}
            ></textarea>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={handleReset}
              className="btn-outline flex items-center"
              disabled={isLoading || (!question && !response)}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Clear
            </button>
            <button
              type="submit"
              className="btn-primary flex items-center"
              disabled={isLoading || !question.trim()}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Submit
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {response && (
        <div 
          ref={responseRef}
          className="card prose dark:prose-invert max-w-none border border-gray-200 dark:border-gray-700"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold m-0">Response</h2>
            <button
              onClick={handleCopy}
              className="flex items-center text-sm btn-outline py-1 px-3"
              aria-label="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 mr-1 text-green-500" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </>
              )}
            </button>
          </div>
          
          <div className="prose-sm md:prose dark:prose-invert max-w-none">
            <ReactMarkdown>{response}</ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ask;