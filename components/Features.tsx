import React from 'react';
import { FaRocket, FaShieldAlt, FaBolt } from 'react-icons/fa';

const features = [
  {
    icon: <FaRocket className="text-4xl text-primary-600" />,
    title: 'Fast Performance',
    description: 'Optimized for speed with Next.js and minimal dependencies.',
  },
  {
    icon: <FaShieldAlt className="text-4xl text-primary-600" />,
    title: 'Secure by Design',
    description: 'Built with security best practices and TypeScript for type safety.',
  },
  {
    icon: <FaBolt className="text-4xl text-primary-600" />,
    title: 'Easy to Deploy',
    description: 'Ready for deployment with Docker and Coolify integration.',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
