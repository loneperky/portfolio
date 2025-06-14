import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import SectionTitle from '../components/SectionTitle';
import axios from 'axios';
const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend here
    const API_URL: string = "https://otaxtech-backend.onrender.com"
    const LOCAL : string = "http://localhost:3000";
    await axios.post(`${API_URL}/api/register`, {
      fullname,
      email,
      subject,
      message
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.error("There was an error submitting the form!", error);
    })
    setIsSubmitted(true);
    // Reset form after submission
    setEmail('');
    setFullname('');
    setSubject('');
    setMessage('');
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  // WhatsApp link
  const whatsappNumber = '+2349126785031';
  const whatsappMessage = 'Hello Otaxtech! I would like to know more about your services.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-dark-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 z-0">
          <img
            src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Contact background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 to-dark-800 z-10"></div>
        </div>

        <div className="container-custom relative z-20">
          <AnimatedSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                Get In <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-xl text-gray-300">
                Have a question or want to work with us? We'd love to hear from you.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-dark-600">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <div>
                <SectionTitle title="Contact Information" light />
                <p className="text-gray-300 mb-8">
                  Have questions about our services or want to discuss a potential project? Reach out to us using any of the methods below, or fill out the contact form and we'll get back to you as soon as possible.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary-900/50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                      <p className="text-gray-400">123 Tech Boulevard, Digital City, Benin City</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-900/50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                      <a href="mailto:info@otaxtech.com" className="text-gray-400 hover:text-primary-400 transition-colors">
                        christianotasowie575@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-900/50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                      <a href="tel:+2349012345678" className="text-gray-400 hover:text-primary-400 transition-colors">
                        +234 912 678 5031
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary-900/50 p-3 rounded-lg mr-4 flex-shrink-0">
                      <MessageCircle className="h-6 w-6 text-primary-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-1">WhatsApp</h3>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary-400 transition-colors"
                      >
                        +234 912 678 5031
                      </a>
                      <p className="text-sm text-gray-500 mt-1">
                        Click to chat with us on WhatsApp
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">Office Hours</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday:</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="card p-8">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <div className="bg-green-900/30 border border-green-800 text-green-300 px-4 py-3 rounded mb-6">
                    <p className="flex items-center">
                      <span className="mr-2">✓</span>
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        className="form-input"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-input"
                        placeholder="Your email"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-gray-300 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="form-input"
                        placeholder="What is this regarding?"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-gray-300 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={5}
                        className="form-input resize-none"
                        placeholder="Your message"
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-full py-3 rounded-md flex items-center justify-center"
                    >
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </button>
                  </form>
                )}

                <div className="mt-6 text-center">
                  <p className="text-gray-400 text-sm">
                    Prefer a direct chat? Reach us on WhatsApp!
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center mt-2 btn bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2 rounded-md"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-dark-700 relative">
        <div className="container-custom">
          <SectionTitle
            title="Our Location"
            subtitle="Find us at our headquarters in Benin City."
            centered
            light
          />

          <AnimatedSection>
            <div className="rounded-xl overflow-hidden h-96 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19868.687203718404!2d-0.12883197114257411!3d51.507883200674664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1652812253185!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Otaxtech Office Location"
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Contact;