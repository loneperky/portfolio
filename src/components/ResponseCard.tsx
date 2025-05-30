import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ResponseCardProps {
  response: string;
}

const ResponseCard = ({ response }: ResponseCardProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="card prose dark:prose-invert max-w-none border border-gray-200 dark:border-gray-700">
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
  );
};

export default ResponseCard;