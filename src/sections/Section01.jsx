import React from "react";
import hometitle from "../assets/hometitle.png";
import home from "../assets/home.png";

const Section01 = () => {
  return (
    <div className="relative border-b bg-gradient-to-b from-[#4a2b23] to-[#321b15] w-screen md:min-h-screen min-h-[900px] flex justify-center items-center px-10">
      <div className="w-screen max-w-[1200px] flex flex-col md:flex-row items-center gap-2 md:gap-0">
        <div className="order-2 md:order-1 md:w-1/2 flex justify-center">
          <img
            className="w-[320px] md:w-[500px] max-w-full"
            src={home}
            alt="coffee"
          />
        </div>

        <div
          className="order-1 md:order-2 md:w-1/2 text-center md:text-left flex flex-col justify-center"
          style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 500 }}
        >
          <h5 className="text-[#d4a74d] uppercase tracking-widest">
            Exceptional Quality
          </h5>
          <h2
            className="text-white text-4xl md:text-6xl font-bold italic my-4 mb-6"
            style={{ fontFamily: "Pacifico, cursive", fontWeight: 400 }}
          >
            It's time for a <br className="hidden md:block" /> good coffee
            <img
              className="inline-block w-20 ml-2"
              src={hometitle}
              alt="coffee"
            />
          </h2>
          <p
            className="text-white text-lg leading-relaxed mt-4"
            style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 400 }}
          >
            Each select coffee bean reflects our commitment{" "}
            <br className="hidden md:block" />
            to Peruvian coffee growers, who bring the best{" "}
            <br className="hidden md:block" />
            select coffee to your table.
          </p>
          <div
            className="mt-6 w-48 h-10 flex items-center justify-center rounded-full bg-[#d4a74d] px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-black mx-auto md:mx-0"
            style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 500 }}
          >
            Get Started →
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section01;
