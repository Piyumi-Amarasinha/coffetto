import React from "react";
import last from "../assets/last.png";

const Section05 = () => {
  return (
    <div className="relative bg-white w-full min-h-screen flex justify-center items-start rounded-t-[50px] mt-[-50px] px-10 pl-[160px] pr-[160px]">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start ">
        {/* text section */}
        <div className="md:w-1/2 flex flex-col justify-center items-start text-left md:ml-10 md:gap-[32px]">
          <h2
            className="text-[#2E2624] text-4xl md:text-6xl leading-relaxed"
            style={{
              fontFamily: "Pacifico, cursive",

              fontWeight: 400,
            }}
          >
            Coffee is the best drink in the morning, it keeps you focused.
          </h2>
          <h6
            className="text-[#5B4C48] leading-relaxed text-center md:text-left mt-[48px]"
            style={{
              fontFamily: "Poppins",
              fontSize: "16px",
              fontWeight: 500,
            }}
          >
            Jhon Doe
          </h6>
        </div>
        {/* image section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 ">
          <img
            className="w-full md:w-[550px] h-auto md:h-[366.85px] max-w-full mt-2"
            src={last}
            alt="coffee"
          />
        </div>
      </div>
    </div>
  );
};

export default Section05;
