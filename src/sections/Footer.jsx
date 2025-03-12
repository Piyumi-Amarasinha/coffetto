import React from "react";
import logo from "../assets/footerimg/footer-logo.png";
import rightArrow from "../assets/footerimg/right-arrow.png";
import footerBg from "../assets/footerimg/bg-coffee.png";
import fb from "../assets/footerimg/fb-icon.png";
import twitter from "../assets/footerimg/twitter.png";
import insta from "../assets/footerimg/instagram-icon.png";

function Footer() {
  return (
    <div
      className="flex w-full  bg-[#2B1712]  bottom-0 rounded-t-[56px] md:rounded-t-[104px] items-center justify-center"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col w-full pt-[96px] h-full md:px-[160px] items-center justify-center ">
        <div className="flex  flex-col md:flex-row w-full justify-center md:justify-between items-center gap-[72px] md:gap-0 ">
          <div className="flex flex-col items-center justify-center">
            <img src={logo} alt="logo" className="w-[107px] h-[35px]" />
            <div
              className="text-white font-noraml text-[28px] md:text-4xl mt-[24px] text-center"
              style={{
                fontFamily: "Pacifico",
                fontSize: "36px",
                fontWeight: 400,
              }}
            >
              Sign up for our newsletter
            </div>
          </div>

          <div className="w-[328px] md:w-[360px] flex flex-col justify-center items-center">
            <input
              placeholder="Enter e-mail address"
              type="text"
              className="rounded-[64px] border-[#847571] border-[2px] h-[64px] w-full text-[16px] pl-[25px] font-[500] text-[#847571]"
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
              }}
            />
            <div
              className="flex justify-center items-center rounded-[64px] bg-[#DDB66F] h-[64px] w-full mt-[24px] text-[16px] font-[500] cursor-pointer"
              style={{
                fontFamily: "Poppins",
                fontSize: "16px",
                fontWeight: 500,
              }}
            >
              Subscribe{" "}
              <span>
                <img src={rightArrow} />
              </span>
            </div>
            <div
              className="font-normal text-[14px] text-white mt-[24px]"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              We care about your data. Read our{" "}
              <span
                className="text-[#DDB66F] cursor-pointer"
                style={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: 400,
                }}
              >
                Privacy Policy
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-[48px] mt-[72px] mb-[32px] md:mt-[96px]">
          <img src={fb} alt="facebook icon" className="cursor-pointer" />
          <img src={insta} alt="instagram icon " className="cursor-pointer" />
          <img src={twitter} alt="twitter icon" className="cursor-pointer" />
        </div>

        <div
          className="text-[13px] text-[#847571]  mb-[35px]"
          style={{ fontFamily: "Poppins", fontSize: "13px", fontWeight: 400 }}
        >
          @Copyright Bedimcode. All rights reserved
        </div>
      </div>
    </div>
  );
}

export default Footer;
