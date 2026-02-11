'use client';

import { useEffect, useState } from 'react';

export default function Mission() {
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

    const element = document.getElementById('mission');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  if (!mounted) return null;

  const stats = [
    { number: '∞', label: 'Smiles Created' },
    { number: '100%', label: 'Heart & Dedication' },
    { number: '1', label: 'Amazing Team' }
  ];

  return (
    <section id="mission" className="py-24 bg-gradient-to-br from-blue-50 via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold text-blue-600 mb-6 transition-all duration-1000 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Our Mission
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 transform ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            To leverage technology and creativity to create engaging, comforting experiences that brighten the days of children facing medical challenges at Dell Children's Hospital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + index * 200}ms` }}
            >
              <div className="text-5xl font-black bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}