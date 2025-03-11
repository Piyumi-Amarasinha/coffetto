import React from "react";
import about from "../assets/about.png";

const Section03 = () => {
  return (
    <div className="relative bg-white w-full md:min-h-screen min-h-[800px] justify-center items-center rounded-t-[50px] mt-[-300px]">
      <div className="w-full flex flex-col md:flex-row items-center md:items-start">
        <div className="order-2 md:order-1 md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            className="w-[320px] md:w-[500px] max-w-full mt-2"
            src={about}
            alt="coffee"
          />
        </div>
        <div className="order-1 md:order-2 ">
          <h2
            className="text-[##2E2624] text-4xl md:text-6xl leading-relaxed mt-2"
            style={{
              fontFamily: "Pacifico, cursive",

              fontWeight: 400,
            }}
          >
            Our History
          </h2>
          <p
            className="text-black text-lg leading-relaxed mt-5"
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
