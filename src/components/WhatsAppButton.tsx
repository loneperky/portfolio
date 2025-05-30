import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Example WhatsApp number
  const whatsappNumber = '+2349126785031';
  const whatsappMessage = 'Hello Otaxtech! I would like to know more about your services.';
  
  // Generate WhatsApp URL with pre-filled message
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  return (
    <a 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="whatsapp-btn hover:shadow-xl group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
    </a>
  );
};

export default WhatsAppButton;