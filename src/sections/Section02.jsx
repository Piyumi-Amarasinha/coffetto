import React from "react";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";

const Section02 = () => {
  return (
    <div className="relative bg-[#492d26] w-full md:min-h-screen min-h-[800px] flex justify-center items-start px-10 rounded-t-[50px] pb-20 mt-[-40px] pl-[160px] pr-[160px]">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* text section */}
        <div className="md:w-1/2 flex flex-col items-start flex justify-center gap-4">
          <div className="w-48 h-10 mt-2 flex items-center md:item-left justify-center rounded-full bg-[#301a14] px-4 py-2 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-black mb-10">
            Scroll Down
          </div>
          <p
            className="text-white text-lg leading-relaxed"
            style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 400 }}
          >
            We strive to form deep partnerships with farmers <br /> from all
            over the world to create perspective <br /> together and form
            healthy working relationships <br /> built on trust and respect.
          </p>
        </div>
        {/* image section */}
        <div className="md:w-1/2 flex justify-center md:justify-end gap-[88px] mt-[166px] md:mt-0">
          <div className="flex flex-col items-center">
            <img
              className="w-[120px] md:w-[180px]"
              src={product1}
              alt="coffee"
            />
            <p
              className="text-center text-white mt-2"
              style={{
                fontFamily: "Pacifico, cursive",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              Classic Coffee
            </p>
            <p
              className="text-center text-[#d4a74d] font-bold"
              style={{
                fontFamily: "Pacifico, cursive",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              $6.99
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-[120px] md:w-[180px]"
              src={product2}
              alt="coffee"
            />
            <p
              className="text-center text-white mt-2"
              style={{
                fontFamily: "Pacifico, cursive",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              Black Coffee
            </p>
            <p
              className="text-center text-[#d4a74d] font-bold"
              style={{
                fontFamily: "Pacifico, cursive",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              $5.99
            </p>
          </div>

          <div className="flex flex-col items-center">
            <img
              className="w-[120px] md:w-[180px]"
              src={product3}
              alt="coffee"
            />
            <p
              className="text-center text-white mt-2"
              style={{
                fontFamily: "Pacifico, cursive",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              Strong Coffee
            </p>
            <p
              className="text-center text-[#d4a74d] font-bold"
              style={{
                fontFamily: "Pacifico, cursive",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              $7.99
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section02;
