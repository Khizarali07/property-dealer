import React from "react";

const Reviews = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <div
      className="w-full max-w-[1440px] h-[135vh] mx-auto flex flex-col md:flex-row items-center md:justify-center px-6 md:px-20 py-10 md:pt-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, white 30%, transparent 70%), url('/bgReview.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="w-full max-w-[682px] flex flex-col justify-start items-start md:items-end h-full">
        <div className="relative flex flex-col justify-end items-center gap-5 self-stretch h-auto bg-[#fcba6a] px-6 py-10 md:rounded-tl-[10px] md:rounded-tr-[10px] md:rounded-bl-[10px] rounded-[10px] mt-16">
          <img
            src="/reviewUser.png"
            alt="User"
            className="absolute left-1/2 transform -translate-x-1/2 -top-12 w-24 h-24 md:w-32 md:h-32 object-cover rounded-full z-10"
          />
          <span className="font-semibold text-[16px] md:text-[18px] text-center capitalize text-white">
            “Property profiled not only gives me information but more options to
            find the stuff I need.”
          </span>
          <img src="/review1.svg" alt="reviews" className="w-6 h-6" />
          <div className="flex flex-col gap-1 self-stretch">
            <span className="font-bold text-[18px] md:text-[20px] text-center text-white">
              Fleetwood Henry
            </span>
            <span className="font-normal text-[14px] md:text-[15px] text-center text-white">
              Jamaica, NY
            </span>
          </div>
        </div>
        <div className="flex flex-row md:flex-col w-full md:w-[54px]">
          <div className="flex justify-center items-center h-[54px] bg-white px-5 py-2.5 cursor-pointer">
            <img src="/reviewArrow1.svg" alt="arrow" className="w-5 h-5" />
          </div>
          <div className="flex justify-center items-center h-[54px] bg-[#fcba6a] px-5 py-2.5 cursor-pointer">
            <img src="/reviewArrow2.svg" alt="arrow" className="w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full justify-center gap-3 self-stretch w-full max-w-[356px]">
        <div className="flex flex-col justify-end gap-3.5 self-stretch h-auto bg-white p-6 md:p-10 rounded-[10px]">
          <span className="font-bold text-3xl md:text-[45px] leading-[36px] md:leading-[54px] capitalize text-[#1e418d] text-center md:text-left">
            User Reviews
          </span>
          <span className="font-normal text-sm md:text-[14px] leading-[22px] md:leading-[24px] text-[#8e8e93] text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur. Ipsum posuere vitae quam id
            convallis lacus amet vitae ullamcorper.
          </span>
        </div>
      </div>
    </div>
  </div>
));

Reviews.displayName = "Reviews";
export default Reviews;
