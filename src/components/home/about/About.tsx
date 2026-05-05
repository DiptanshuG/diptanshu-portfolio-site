import React, { useState } from "react";
import profile from "~/images/my.jpeg";
import Image from "next/image";
import ContactFormModal from "@/components/ContactFormModal";

const About: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-[rgb(9,4,22)] text-white py-16 md:py-24">
      <div className="section-shell">
        <h2 className="text-4xl md:text-5xl mb-12 md:mb-16 font-extrabold text-white text-center">
          About Me
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
          {/* Profile Image */}
          <div className="w-full lg:w-auto lg:flex-shrink-0 fade-in">
            <div className="relative w-full max-w-[500px] mx-auto lg:mx-0 aspect-[5/6] lg:aspect-[5/6] overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={profile}
                alt="Picture of Diptanshu Bhawsar"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 space-y-6 fade-in" style={{ animationDelay: "0.25s" }}>
            <div className="space-y-4 text-lg md:text-xl lg:text-2xl leading-relaxed">
              <p className="font-semibold text-2xl md:text-3xl">Hi there — I’m Diptanshu.</p>

              <p>
                I am a frontend product engineer with 4 years of experience building enterprise-grade web applications and polished, high-conversion user interfaces.
              </p>

              <p>
                I bring product-focused engineering and design system discipline to every project, helping teams ship faster while maintaining performance, accessibility, and brand consistency.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Focus areas</p>
                <ul className="mt-3 space-y-2 text-white/80 text-sm">
                  <li>React & Next.js applications</li>
                  <li>Responsive UX with polished UI</li>
                  <li>Performance-first frontend builds</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">What I deliver</p>
                <ul className="mt-3 space-y-2 text-white/80 text-sm">
                  <li>Design system and component libraries</li>
                  <li>Accessible and scalable interfaces</li>
                  <li>Strong collaboration with product teams</li>
                </ul>
              </div>
            </div>

            <button
              onClick={handleModalOpen}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 font-semibold text-white py-3 px-6 rounded-xl shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Contact me for product work
            </button>
          </div>
        </div>

      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>
  );
};

export default About;
