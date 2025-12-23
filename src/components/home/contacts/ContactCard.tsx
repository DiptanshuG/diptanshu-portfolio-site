import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const socialMediaLinks = [
  { name: "GitHub", url: "https://github.com/DiptanshuG", icon: FaGithub },
  { name: "Twitter", url: "https://twitter.com/DiptanshuBhaws3", icon: FaTwitter },
  { name: "Instagram", url: "https://www.instagram.com/diptanshu_bhawsar/", icon: FaInstagram },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/diptanshu-bhawsar-503b201aa/", icon: FaLinkedinIn },
  { name: "Instagram (Coding)", url: "https://www.instagram.com/codding_things/", icon: FaInstagram },
  { name: "YouTube", url: "https://www.youtube.com/@StudyFreeStudent", icon: FaYoutube },
];

const ContactCard: React.FC = () => {
  return (
    <div className="h-[370px] w-fit bg-[#242424] border border-transparent rounded-lg transition-all duration-1000 ease-in-out p-4">
      <div>
        <h2 className="text-4xl my-6 font-bold mb-8 text-white text-center font-extrabold">
          Contact Me
        </h2>
        <div className="flex flex-col items-center justify-center p-4">
          <a className="contactInfo break-all truncate" href="mailto:diptanshubhawsar50@gmail.com">
            <AiOutlineMail className="inline-block mr-2" />
            diptanshubhawsar50@gmail.com
          </a>
          <br />
          <a className="contactInfo" href="tel:+917582974834">
            <AiOutlinePhone className="inline-block mr-2" />
            +91 7582974834
          </a>
        </div>
        <div className="socials flex justify-center items-center space-x-4 mt-4">
          {socialMediaLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <link.icon className="socialIcon" style={{ fontSize: "34px" }} title={link.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
