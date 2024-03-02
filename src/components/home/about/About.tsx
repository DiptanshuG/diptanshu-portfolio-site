import React from "react";
import profile from "~/images/profile-pic.png";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="bg-[rgb(9,4,22)] text-white py-16">
      <div className="mt-[160px] flex flex-col gap-3 ">
        <h2 className="text-4xl my-6 mb-8 font-bold mb-8 text-white text-center font-extrabold">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row items-center justify-center w-full px-9">
          <div
            className="m-4 md:ml-9 "
            style={{
              maxWidth: "500px",
              maxHeight: "600px",
            }}
          >
            <Image
              src={profile}
              alt="Picture of dipanshu bhawsar"
              width={600}
              height={520}
              className="w-full rounded-xl"
            />
          </div>
          <div
            className="infoContainer fadeInScroll delay fadeInScrollActive lg:pl-8 flex-grow md:mt-0 mt-4 md:mr-9"
            data-delay="0.25"
            style={{ animationDelay: "0.25s" }}
          >
            <p className="font-normal text-2xl">
              <div>Hi There!,</div>
              <br />
              <div>
                I&apos;m Yigit. I am a{" "}
                <b className="text-[#6D37FF]">front-end web developer</b> and{" "}
                <b className="text-[#6D37FF]">designer</b> with a passion for
                creating unique and beautiful websites. I have experience with a
                variety of technologies, including HTML, CSS, Javascript,
                React.js, Adobe Xd and{" "}
                <span className="border-b-2 border-[#6D37FF]">more..</span>.
              </div>
              <br />

              <div>
                My goal is to not only meet, but exceed my clients&apos; expectations
                by delivering visually stunning and intuitive websites that
                effectively communicate their message.
              </div>
            </p>
            <button
              className="delay bg-[#6D37FF] md:w-fit w-full font-bold text-white py-2 md:mx-8 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
              data-delay="0.5"
              style={{ animationDelay: "0.5s" }}
            >
              Contact Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
