'use client';

import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Link from 'next/link';

export default function About() {
  return (
    <section id="about" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          description="Learn more about my background and what drives me as a developer."
        />
        <div className="flex gap-12 items-center md:flex-row flex-col">
          <div className="md:w-1/3 relative group flex justify-center">
            <div className="w-72 h-72 relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary-dark rounded-full blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <Image
                src="/assets/profile.png"
                alt="Profile Image"
                width={288}
                height={288}
                className="relative w-full h-full rounded-full shadow-2xl object-cover transform group-hover:scale-[1.02] transition duration-300 border-4 border-white"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-5">
            <h3 className="text-4xl font-bold mb-6 text-gray-800 leading-tight">Who I Am</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a Junior Full Stack Developer with 3 years of experience building web applications. I have strong proficiency in frontend development, crafting responsive and user-friendly interfaces.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I studied Bachelor of ICT at Chalimbana University, which gave me a solid foundation in algorithms, data structures, and software design principles.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm passionate about writing clean, efficient, and scalable code that solves real-world problems. I believe technology has the power to transform industries and improve lives.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              When I’m not coding, I enjoy contributing to open-source projects, mentoring junior developers, and staying updated with the latest tech trends.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl gap-2"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
