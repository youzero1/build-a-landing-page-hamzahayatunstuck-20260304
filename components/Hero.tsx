import React from 'react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-primary-100 to-primary-50 py-20 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welcome to Our Modern Landing Page
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10">
          A sleek, responsive landing page built with Next.js, TypeScript, and Tailwind CSS. Perfect for showcasing your product or service.
        </p>
        <a
          href="#contact"
          className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 inline-block"
        >
          Get Started Today
        </a>
      </div>
    </section>
  );
}
