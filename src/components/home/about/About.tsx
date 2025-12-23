import React, { useState } from "react";
import profile from "~/images/my.jpeg";
import Image from "next/image";
import PaymentComponent from "./payment/PaymentComponent";
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
              <p className="font-semibold text-2xl md:text-3xl">Hi There!,</p>

              <p>
                {"I'm Diptanshu. I am a "}
                <span className="font-bold text-purple-400">
                  front-end web developer
                </span>
                {" and "}
                <span className="font-bold text-purple-400">designer</span>
                {" with a passion for creating unique and beautiful websites. I have experience with a variety of technologies, including HTML, CSS, Javascript, React.js, Adobe Xd and "}
                <span className="border-b-2 border-purple-400 font-semibold">more..</span>
                .
              </p>

              <p>
                My goal is to not only meet, but exceed my clients&apos;
                expectations by delivering visually stunning and intuitive
                websites that effectively communicate their message.
              </p>
            </div>

            <button
              onClick={handleModalOpen}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 font-semibold text-white py-3 px-6 rounded-xl shadow-lg shadow-purple-900/40 transition-all duration-300 hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400"
            >
              Contact Now
            </button>
          </div>
        </div>

        {/* Payment Component - Separate Section */}
        <div className="mt-12 md:mt-16 fade-in" style={{ animationDelay: "0.5s" }}>
          <PaymentComponent />
        </div>
      </div>

      <ContactFormModal isOpen={isModalOpen} onClose={handleModalClose} />
    </section>
  );
};

export default About;
