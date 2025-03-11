import React from "react";

const ProcessStep = ({ number, image, description, isAbove }) => {
  return (
    <div className="flex flex-col items-center max-w-[250px]">
      {isAbove && (
        <p
          className="text-white text-center  text-sm"
          style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 400 }}
        >
          {description}
        </p>
      )}

      <div className="relative">
        <div className="w-48 h-48 rounded-full bg-[#3a1d16] flex items-center justify-center">
          <img
            src={image}
            alt={`Coffee Process Step ${number}`}
            className="w-50 h-50 object-contain"
          />
        </div>
        <div className="absolute -top-2 -left-0 w-14 h-14 rounded-full bg-[#d4a74d] flex items-center justify-center text-[#4a2b23] font-bold text-xl border-4 border-[#4a2b23]">
          {number.toString().padStart(2, "0")}
        </div>
      </div>

      {!isAbove && (
        <p
          className="text-white text-center mt-4 text-sm"
          style={{ fontFamily: "Poppins", fontSize: "16px", fontWeight: 400 }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default ProcessStep;
