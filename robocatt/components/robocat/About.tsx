'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: '❤️',
      title: 'Made with Love',
      description: 'Every aspect of RoboCat is crafted with care and compassion for the children'
    },
    {
      icon: '🤝',
      title: 'Community Driven',
      description: 'Built by the amazing community of friends at Dell working together'
    },
    {
      icon: '✨',
      title: 'Spreading Joy',
      description: 'Creating magical moments and bringing happiness to young patients'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-blue-600 mb-6 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            About RoboCat
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            RoboCat is a heartwarming project created by friends at Dell to bring smiles and comfort to the children at Dell Children's Hospital. Through creativity and compassion, we're building something truly special.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-gray-50 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="text-5xl mb-4 animate-pulse">{feature.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}