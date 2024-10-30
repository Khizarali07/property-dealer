import React from "react";

const Leverage = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <div className="w-full bg-[#D8D8D8] max-w-[1440px] mx-auto flex flex-col items-center gap-10 md:gap-[60px] px-6 md:px-20 py-10 md:py-[100px]">
      <div className="w-full max-w-[772px] flex flex-col items-center gap-3.5 text-center">
        <span className="font-bold text-3xl md:text-[45px] leading-[36px] md:leading-[54px] capitalize text-black">
          Leverage user-driven power tools for more efficient research
        </span>
        <span className="font-normal text-sm md:text-[14px] leading-[22px] md:leading-[24px] text-[#8e8e93]">
          Lorem ipsum dolor sit amet consectetur. Ipsum posuere vitae quam id
          convallis lacus amet vitae ullamcorper. Lobortis nulla lorem
          sollicitudin arcu et pretium nibh
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 self-stretch">
        <div className="flex flex-col gap-3.5 h-auto md:h-[372px] bg-white p-6 md:pl-10 md:pr-5 md:pt-10 md:pb-10 rounded-[10px] text-center md:text-left">
          <div className="h-20 w-20 flex justify-center items-center rounded-[40px] border-2 border-solid border-[#fcba6a]">
            <img src="/home1.svg" alt="home" className="w-10 h-10" />
          </div>
          <span className="text-lg md:text-[22px] text-black">
            Build lists to organize the properties and people you’ve searched
          </span>
        </div>
        <div className="flex flex-col gap-3.5 h-auto md:h-[372px] bg-white p-6 md:pl-10 md:pr-5 md:pt-10 md:pb-10 rounded-[10px] text-center md:text-left">
          <div className="h-20 w-20 flex justify-center items-center rounded-[40px] border-2 border-solid border-[#fcba6a]">
            <img src="/home2.svg" alt="home" className="w-110 h-110" />
          </div>
          <span className="text-lg md:text-[22px] text-black">
            Download formatted PDFs for easy access
          </span>
        </div>
        <div className="flex flex-col gap-3.5 h-auto md:h-[372px] bg-white p-6 md:pl-10 md:pr-5 md:pt-10 md:pb-10 rounded-[10px] text-center md:text-left">
          <div className="h-20 w-20 flex justify-center items-center rounded-[40px] border-2 border-solid border-[#fcba6a]">
            <img src="/home3.svg" alt="home" className="w-10 h-10" />
          </div>
          <span className="text-lg md:text-[22px] text-black">
            Automate monitoring and get notified of new info about your searches
          </span>
        </div>
        <div className="flex flex-col gap-3.5 h-auto md:h-[372px] bg-white p-6 md:pl-10 md:pr-5 md:pt-10 md:pb-10 rounded-[10px] text-center md:text-left">
          <div className="h-20 w-20 flex bg-[#fcba6a] justify-center items-center rounded-[40px] border-2 border-solid border-[#fcba6a]">
            <img src="/home4.svg" alt="home" className="w-10 h-10" />
          </div>
          <span className="text-lg md:text-[22px] text-black">
            Try the NeighborWho Chrome extension to explore in-depth property
            insights for listings on Zillow®
          </span>
        </div>
      </div>
      <div className="h-[54px] flex justify-center items-center gap-4 md:gap-[17px] bg-[#1e418d] px-4 md:px-5 py-3 md:py-[15px] rounded-[10px]">
        <span className="font-bold text-sm md:text-[15px] leading-[24px] text-center text-white">
          Search an address
        </span>
        <img
          src="/search.svg"
          alt="search icon"
          className="w-4 h-4 mx-2 cursor-pointer"
        />
      </div>
    </div>
  </div>
));

Leverage.displayName = "Leverage";

export default Leverage;
