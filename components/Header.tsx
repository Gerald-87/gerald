
"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#1E1E1E] border-b border-[#00ff00]/20 fixed w-full top-0 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto md:flex-row flex-col md:gap-0 gap-4">
        <div className="font-mono text-2xl text-[#00ff00] hover:text-[#33ff33] transition-colors duration-300">~/gerald_limbando $</div>
        <div className="flex items-center md:gap-8 gap-4 flex-wrap justify-center">
          <nav className="flex md:gap-8 gap-4 flex-wrap justify-center font-mono">
            {['home', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <Link
                key={section}
                href={section === 'home' ? '/' : `#${section}`}
                className="text-[#00ff00] hover:text-[#33ff33] transition-colors duration-300"
              >
                {'>'} cd_{section}
              </Link>
            ))}
          </nav>
          <a
            href="/files/resume.pdf"
            download="Gerald_Limbando_Resume.pdf"
            className="bg-[#00ff00]/10 border-2 border-[#00ff00]/40 px-4 py-2 rounded-md font-mono text-[#00ff00] hover:bg-[#00ff00]/20 hover:text-[#33ff33] transition-colors duration-300"
          >
            $ download_resume
          </a>
        </div>
      </div>
    </header>
  );
}
