'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [titleVisible, setTitleVisible] = useState(false);

  const emojis = ['🐱', '🤖', '🐱‍👓', '🎈', '⭐', '🌈'];

  useEffect(() => {
    setMounted(true);
    setTimeout(() => setTitleVisible(true), 500);
  }, []);

  const handleEmojiClick = () => {
    setEmojiIndex((prev) => (prev + 1) % emojis.length);
  };

  if (!mounted) return null;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-8 py-24 relative overflow-hidden bg-gradient-to-br from-blue-50 via-gray-50 to-white">
      {/* Background floating element */}
      <div className="absolute top-0 right-0 w-full h-full">
        <div className="absolute top-1/2 right-1/2 w-full h-full rounded-full bg-teal-100 opacity-20 animate-pulse" 
             style={{ transform: 'translate(50%, -50%) scale(2)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Hero Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className={`text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent transition-all duration-1000 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            RoboCat
          </h1>
          
          <p className={`text-2xl md:text-3xl font-semibold text-orange-500 transition-all duration-1000 delay-300 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Bringing Joy to Dell Children's Hospital
          </p>
          
          <p className={`text-lg text-gray-600 max-w-lg mx-auto md:mx-0 transition-all duration-1000 delay-600 transform ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            A collaborative project by Dell friends to create something special for children
          </p>
          
          <button className={`inline-block bg-gradient-to-r from-blue-600 to-teal-400 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <span className="relative z-10">Learn More</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Hero Visual */}
        <div className="flex justify-center md:justify-end">
          <button
            onClick={handleEmojiClick}
            className="text-6xl md:text-8xl hover:scale-110 transition-transform duration-300 animate-bounce cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-200 rounded-full p-4"
            style={{ animation: 'bounce 3s ease-in-out infinite' }}
          >
            {emojis[emojiIndex]}
          </button>
        </div>
      </div>
    </section>
  );
}