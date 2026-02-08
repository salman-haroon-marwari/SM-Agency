'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatbotAgent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! 👋 Welcome to SM AGENCY. I'm your Sales & Qualification Agent. I'm here 24/7 to assist you with our services and help you place your orders. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    greeting: "Hello again! 👋 I'm your Sales & Qualification Agent. How can I assist you with our services today?",
    welcome: "Welcome to SM AGENCY! I'm your dedicated Sales & Qualification Agent, available 24/7 to help you. We specialize in AI Automation, Web Development, SEO Optimization, Digital Marketing, and much more. You can ask me about our services, or I can guide you to place your order through our contact form.",
    services: "We offer a comprehensive range of services including:\n\n• AI Automation & AI Agents (Lead Qualification, Customer Support, Invoice Follow-up)\n• Web Development (Complete websites, Next.js, Landing pages)\n• SEO Optimization (Technical SEO, On-page, Audits)\n• Digital Marketing (Google Ads, Social Media)\n• E-commerce Solutions (Shopify, Optimization)\n\nWould you like more details about any specific service?",
    order: "Great! To place your order, I recommend filling out our Sales Qualification Form. This helps us understand your specific needs and provide you with a personalized quote. Would you like me to direct you to the form?",
    contact: "You can reach us through several channels:\n\n• Contact Form: Fill out our detailed qualification form\n• WhatsApp: +92 333 0161988 (24/7 support)\n• Email: smagencyglobal@gmail.com\n\nFor the fastest response and best service matching, I recommend our qualification form.",
    help: "I'm your AI Sales & Qualification Agent! I can:\n\n• Introduce our services\n• Guide you to place orders\n• Answer questions about our offerings\n• Connect you with the right solutions\n• Provide information about pricing and timelines\n\nFeel free to ask me anything!",
    pricing: "Our pricing varies based on project scope and complexity. We offer custom quotes for each project after understanding your specific requirements. The Sales Qualification Form will help us provide you with an accurate quote tailored to your needs.",
    timeline: "Project timelines depend on complexity:\n\n• Small projects: 1-2 weeks\n• Medium projects: 2-4 weeks\n• Large projects: 4+ weeks\n\nAfter filling the qualification form, we can provide a more accurate timeline for your specific project.",
    support: "We offer 24/7 support via WhatsApp (+92 333 0161988) and email (smagencyglobal@gmail.com). Additionally, we provide ongoing maintenance and support packages for completed projects to ensure everything runs smoothly.",
    ai_agent: "Our AI Agents are specialized solutions that can automate various business processes:\n\n• Sales AI Agent: Identifies leads, predicts conversions\n• Customer Success AI: Automates follow-ups and support\n• HR & Hiring AI: Streamlines recruitment\n• Content Strategist AI: Plans and optimates content\n• Operations Manager AI: Manages workflows\n\nWould you like more details about any specific AI solution?",
    thanks: "Thank you for your interest! I'll guide you to our Sales Qualification Form where you can share your project details and we can provide you with a personalized quote. This is the best way to start your project with us.",
    default: "I'm your AI Sales & Qualification Agent! I'm here to help you learn about our services and guide you to place your order. You can ask me about our services, pricing, how to place an order, or anything else related to our offerings. What would you like to know?"
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      let response = botResponses.default;
      const lowerInput = inputValue.toLowerCase();
      
      if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
        response = botResponses.greeting;
      } else if (lowerInput.includes('welcome') || lowerInput.includes('help')) {
        response = botResponses.welcome;
      } else if (lowerInput.includes('service') || lowerInput.includes('what do you do') || lowerInput.includes('offer') || lowerInput.includes('what services')) {
        response = botResponses.services;
      } else if (lowerInput.includes('order') || lowerInput.includes('buy') || lowerInput.includes('purchase') || lowerInput.includes('place') || lowerInput.includes('get started')) {
        response = botResponses.order;
      } else if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('call') || lowerInput.includes('whatsapp') || lowerInput.includes('email')) {
        response = botResponses.contact;
      } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('pricing') || lowerInput.includes('quote') || lowerInput.includes('how much')) {
        response = botResponses.pricing;
      } else if (lowerInput.includes('time') || lowerInput.includes('schedule') || lowerInput.includes('when') || lowerInput.includes('delivery') || lowerInput.includes('timeline')) {
        response = botResponses.timeline;
      } else if (lowerInput.includes('support') || lowerInput.includes('maintenance') || lowerInput.includes('help after')) {
        response = botResponses.support;
      } else if (lowerInput.includes('ai') || lowerInput.includes('agent') || lowerInput.includes('automation')) {
        response = botResponses.ai_agent;
      } else if (lowerInput.includes('form') || lowerInput.includes('qualif') || lowerInput.includes('sales')) {
        response = botResponses.thanks + " Click the 'Go to Form' button below to share your project details.";
      }

      const botMessage = { id: Date.now() + 1, text: response, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleGoToForm = () => {
    // Close the chat and navigate to the contact page where the form is located
    setIsOpen(false);
    window.location.href = '/contact';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="w-20 h-16 bg-white rounded-lg shadow-xl flex flex-col border border-gray-200 overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-2 flex justify-between items-center">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="font-semibold text-xs">AI Sales Agent</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Messages Container */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <div
                    className={`inline-block p-3 rounded-lg max-w-xs ${
                      message.sender === 'user'
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white'
                        : 'bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800'
                    }`}
                  >
                    {message.text.split('\n').map((line, index) => (
                      <div key={index}>{line}</div>
                    ))}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="text-left mb-3">
                  <div className="inline-block p-3 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300 text-gray-800">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-75"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-150"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Action Button (when appropriate) */}
            {messages.some(msg => msg.text.includes('Go to Form')) && (
              <div className="p-3 bg-gradient-to-r from-yellow-50 to-amber-50 border-t border-yellow-200">
                <button
                  onClick={handleGoToForm}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md"
                >
                  Go to Sales Qualification Form
                </button>
              </div>
            )}

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-200 flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about our services or place an order..."
                className="flex-1 border border-gray-300 rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-r-lg hover:from-blue-700 hover:to-indigo-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Icon */}
      {!isOpen && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
          aria-label="Open AI Sales Agent"
        >
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <div className="absolute top-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
          </div>
        </motion.button>
      )}
    </div>
  );
};

export default ChatbotAgent;