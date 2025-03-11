import React from "react";
import ProcessStep from "../components/ProcessStep";
import coffeebeans from "../assets/coffeebeans.png";
import greencoffee from "../assets/greencoffee.png";
import groundcoffee from "../assets/groundcoffee.png";

const Section04 = () => {
  const processSteps = [
    {
      number: 1,
      image: coffeebeans,
      description:
        "Harvest occurs annually when the coffee beans reach maturity and are collected for processing.",
      isAbove: false,
    },
    {
      number: 2,
      image: greencoffee,
      description:
        "The beans are dried using craft drying techniques focusing on the taste we want to deliver.",
      isAbove: true,
    },
    {
      number: 3,
      image: groundcoffee,
      description:
        "The coffee is roasted and ground, followed by processing the grain in mixers.",
      isAbove: false,
    },
  ];

  return (
    <div className="relative bg-[#4a2b23] w-full md:min-h-screen min-h-[1000px] flex justify-center items-center rounded-t-[50px] mt-[-300px] py-16">
      <div className="w-full max-w-[1200px] flex flex-col items-center px-4">
        <h2
          className="text-white text-2xl md:text-6xl text-center mb-16"
          style={{
            fontFamily: "Pacifico, cursive",
            fontWeight: 400,
          }}
        >
          Steps of manufacturing our products
        </h2>

        {/* Desktop logic */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] h-auto z-0 hidden md:block"
          viewBox="0 0 300 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20,50 
            C100,160 200,160 270,70"
            stroke="#644e49"
            strokeWidth="1"
            strokeDasharray="8,8"
            fill="transparent"
          />
        </svg>

        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16 relative hidden md:flex">
          <div className="mt-0 md:mt-0">
            <ProcessStep {...processSteps[0]} />
          </div>

          <div className="mt-12 md:mt-48">
            <ProcessStep {...processSteps[1]} />
          </div>

          <div className="mt-0 md:mt-0">
            <ProcessStep {...processSteps[2]} />
          </div>
        </div>

        {/* Mobile logic */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[60%] h-auto z-0 block md:hidden"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100,20 A80,80 0 0,1 100,180"
            stroke="#644e49"
            strokeWidth="2"
            strokeDasharray="8,8"
            fill="transparent"
          />
        </svg>

        <div className="w-full flex flex-col md:flex-raw justify-center items-start gap-2 md:gap-16 relative block md:hidden">
          <div className="ml-50 md:ml-120">
            <ProcessStep {...processSteps[0]} />
          </div>

          <div className="ml-100 md:ml-200">
            <ProcessStep {...processSteps[1]} />
          </div>

          <div className="ml-50 md:ml-120">
            <ProcessStep {...processSteps[2]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section04;
