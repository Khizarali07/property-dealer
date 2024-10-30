import React from "react";

const Header = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <div className="w-full max-w-[1440px] flex flex-col items-center gap-10 md:gap-[60px] px-4 md:px-10 py-10 md:py-[100px] mx-auto">
      <div className="w-full max-w-[772px] flex flex-col items-center gap-3.5 text-center">
        <span className="font-bold text-2xl md:text-[45px] leading-tight md:leading-[54px] capitalize text-black">
          Access premium data to help you grow your business
        </span>
        <span className="font-normal text-sm md:text-[14px] leading-5 md:leading-[24px] text-[#8e8e93]">
          NeighborWho’s ever-expanding database contains records for millions of
          residential properties and property owners in the U.S. so you can
          leverage the best-available property and contact information.
        </span>
      </div>

      {/* Cards Container */}
      <div className="w-full max-w-[1080px] flex flex-wrap justify-center gap-5 md:gap-x-10 gap-y-5">
        {/* Card Item */}
        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-[50px] rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v1.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Valuations
          </span>
        </div>

        {/* Repeat for other card items with unique content */}
        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-5 rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v2.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Equity Records
          </span>
        </div>

        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-5 rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v3.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Permit Records
          </span>
        </div>

        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-[50px] rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v4.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Sales History
          </span>
        </div>

        {/* Add remaining cards similarly with responsive adjustments */}
        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-5 rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v5.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Full Names
          </span>
        </div>

        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-5 rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v6.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Phone and Email
          </span>
        </div>

        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-[50px] rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v7.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Possible Residents
          </span>
        </div>

        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-5 rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v8.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Asset Info
          </span>
        </div>

        <div className="w-full sm:w-[330px] flex items-center gap-3.5 bg-white p-4 md:pl-10 md:pr-5 rounded-lg shadow-md">
          <div className="h-10 w-10 flex items-center justify-center rounded-full border-2 border-[#5888ec]">
            <img src="/v9.png" alt="password" className="w-5 h-5 mx-2" />
          </div>
          <span className="font-medium text-lg md:text-[21px] text-black">
            Deed Info
          </span>
        </div>
      </div>
    </div>
  </div>
));

Header.displayName = "Header";

export default Header;
