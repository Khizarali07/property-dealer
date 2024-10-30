import React from "react";

const Connect = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between px-6 md:px-20 pt-10 md:pt-[100px]">
      <div className="w-full md:w-[749px] h-full flex flex-col justify-center items-center md:justify-end md:items-start gap-6 md:gap-10">
        <div className="flex flex-col gap-3 md:gap-5 text-center md:text-left">
          <span className="font-bold text-3xl md:text-[45px] leading-[40px] md:leading-[54px] capitalize text-black">
            Connect with Owners and Residents
          </span>
          <span className="font-normal text-[14px] md:text-base leading-[22px] md:leading-[24px] text-[#8e8e93]">
            Search through our database of millions of owners and residents by
            name or address to discover properties in the U.S.. Review contact
            information including email and phone numbers, and learn about other
            assets and holdings.
          </span>
        </div>
        <div className="flex justify-center md:justify-start items-center gap-1.5 cursor-pointer">
          <span className="font-semibold text-sm md:text-base text-[#1e418d]">
            Search owners by name
          </span>
          <img src="/Arrow.svg" alt="arrow" className="w-4 h-4" />
        </div>
      </div>
      <img
        src="/banner2.png"
        alt="banner"
        className="w-full md:w-1/3 h-full mx-2 mt-3"
      />
    </div>
  </div>
));

// Set display name for easier debugging
Connect.displayName = "Connect";

export default Connect;
