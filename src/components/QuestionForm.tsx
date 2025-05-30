import { useState, FormEvent, useRef, useEffect } from 'react';
import { Send, Loader2, RefreshCw } from 'lucide-react';

interface QuestionFormProps {
  onSubmit: (question: string) => void;
  isLoading: boolean;
  placeholder?: string;
  initialValue?: string;
  onReset?: () => void;
}

const QuestionForm = ({
  onSubmit,
  isLoading,
  placeholder = "Type your question here...",
  initialValue = "",
  onReset
}: QuestionFormProps) => {
  const [question, setQuestion] = useState(initialValue);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Adjust textarea height automatically
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [question]);

  useEffect(() => {
    setQuestion(initialValue);
  }, [initialValue]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;
    onSubmit(question);
  };

  const handleReset = () => {
    setQuestion('');
    if (onReset) onReset();
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <textarea
          ref={textareaRef}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder={placeholder}
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
          disabled={isLoading || !question}
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
  );
};

export default QuestionForm;