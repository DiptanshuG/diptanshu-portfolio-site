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
    <div className="bg-black text-white py-16">
      <div className="mt-40 flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-orange-400">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full px-9">
        <div className="m-4 md:ml-9 border-4 border-orange-400 rounded-xl" style={{ maxWidth: "500px", maxHeight: "600px" }}>
            <Image
              src={profile}
              alt="Picture of Diptanshu Bhawsar"
              width={600}
              height={520}
              className="w-full rounded-xl"
            />
          </div>
          <div className="infoContainer lg:pl-8 flex-grow md:mt-0 mt-4 md:mr-9">
            <div className="text-lg">
              <p>Hi There!</p>
              <br />
              <p>
                I&aposm Diptanshu, a passionate <b className="text-orange-400">front-end web developer</b> and <b className="text-orange-400">designer</b>. Over the past three years, I&aposve grown from developing Web3 frontends to becoming a full-stack developer with a diverse skill set.
              </p>
              <br />
              <p>
                I&aposve worked on transforming ecommerce experiences, innovating hackathon platforms, migrating from PHP to React and GoLang, and delving into Web3 projects. My journey has equipped me with expertise in React.js, Node.js, GoLang, Docker, and more.
              </p>
              <br />
              <p>
                My goal is to exceed expectations by delivering visually stunning and intuitive websites that effectively communicate the client&aposs message.
              </p>
            </div>
            <button
              onClick={handleModalOpen}
              className="bg-orange-400 md:w-fit w-full font-bold text-black py-2 md:mr-8 px-4 rounded-lg mt-4 hover:bg-orange-500 transition-colors duration-300"
            >
              Contact Now
            </button>
            <PaymentComponent />
          </div>
        </div>
      </div>
      <ContactFormModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  );
};

export default About;
