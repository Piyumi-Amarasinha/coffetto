import React from "react";
import about from "../assets/about.png";

const Section03 = () => {
  return (
    <div className="relative bg-white w-full md:min-h-screen min-h-[800px] items-center rounded-t-[50px] mt-[-200px] px-4 md:px-[160px] gap-[107px]">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start md:gap-[107px]">
        {/* image section */}
        <div className="order-2 md:order-1 md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            className="w-full md:w-[550px] h-auto md:h-[366.85px] max-w-full mt-2"
            src={about}
            alt="coffee"
          />
        </div>

        {/* text section */}
        <div className="order-1 md:order-2 gap-[107px]">
          <h2
            className="text-[#2E2624] text-4xl md:text-6xl leading-relaxed mt-2"
            style={{
              fontFamily: "Pacifico, cursive",
              fontWeight: 400,
            }}
          >
            Our History
          </h2>
          <p
            className="text-black text-lg leading-relaxed mt-[24px]"
            style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 400 }}
          >
            We strive to form deep partnerships with farmers <br /> from all
            over the world to create perspective <br /> together and form
            healthy working relationships <br /> built on trust and respect.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section03;
