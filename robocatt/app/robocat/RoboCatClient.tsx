'use client';

import { useEffect, useState } from 'react';
import Header from '@/components/robocat/Header';
import Hero from '@/components/robocat/Hero';
import About from '@/components/robocat/About';
import Mission from '@/components/robocat/Mission';
import Contact from '@/components/robocat/Contact';
import Footer from '@/components/robocat/Footer';

export default function RoboCatClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-white overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Mission />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}