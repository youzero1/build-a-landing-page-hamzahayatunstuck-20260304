import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {currentYear} Modern Landing Page. All rights reserved.
        </p>
        <p className="text-gray-500 text-sm mt-2">
          Built with Next.js, TypeScript, and Tailwind CSS. Deployed with Coolify.
        </p>
      </div>
    </footer>
  );
}
