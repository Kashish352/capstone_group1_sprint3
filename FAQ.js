import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  // FAQ data
  const faqData = [
    {
      question: "What is the warranty on your tech products?",
      answer: "Our tech products come with a one-year warranty covering manufacturer defects. Extended warranties are available for some items."
    },
    {
      question: "Can I return a product after opening it?",
      answer: "Yes, you can return a product within 30 days of purchase, even if it has been opened. However, it must be in like-new condition with all original packaging and accessories."
    },
    {
      question: "How do I know if my device is compatible with your accessories?",
      answer: "Each accessory has a compatibility list on its product page. Please check this list to ensure compatibility with your device model."
    },
    {
      question: "Do you offer technical support for purchased products?",
      answer: "Yes, we offer free technical support via chat, phone, and email for all purchased products. Support is available Monday through Friday, from 9 AM to 5 PM."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. Financing options are also available at checkout for eligible purchases."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-5 business days, while expedited options are available at checkout. International shipping times vary by location."
    }
  ];

  // State to keep track of which FAQ item is expanded
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Toggle function for expanding/collapsing an FAQ item
  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${expandedIndex === index ? "expanded" : ""}`} 
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-toggle">{expandedIndex === index ? '-' : '+'}</span>
            </div>
            {expandedIndex === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
