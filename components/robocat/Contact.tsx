'use client';

import { useEffect, useState } from 'react';

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [buttonText, setButtonText] = useState('Reach Out');

  useEffect(() => {
    setMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleContactClick = () => {
    setButtonText('Thank you for your interest!');
    setTimeout(() => {
      setButtonText('Reach Out');
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <section id="contact" className="py-24 bg-white text-center">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className={`text-4xl md:text-5xl font-bold text-blue-600 mb-6 transition-all duration-1000 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Get Involved
        </h2>
        
        <p className={`text-xl text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-300 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Join us in making a difference. Together, we can create something wonderful for the children at Dell Children's Hospital.
        </p>
        
        <button
          onClick={handleContactClick}
          className={`inline-block bg-gradient-to-r from-orange-500 to-teal-400 text-white px-10 py-5 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
}