function Banner() {
  return (
    <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row justify-center items-center md:items-end gap-10 md:gap-[60px] p-10 md:p-20 bg-[#DAE6F1]">
      <img
        src="/banner1.png"
        alt="password"
        className="w-full md:w-1/3 h-full mx-2"
      />
      <div className="flex flex-col justify-end gap-6 md:gap-10 text-center md:text-left w-full md:w-2/3">
        <div className="flex flex-col gap-3 md:gap-3.5">
          <span className="font-bold text-[24px] md:text-[28px] leading-[36px] md:leading-[50px] capitalize text-black">
            Search off-market addresses to learn more about potential
            opportunities and be proactive in growing your business
          </span>
          <span className="font-normal text-[14px] leading-[24px] text-[#8e8e93]">
            Lorem ipsum dolor sit amet consectetur. Ipsum posuere vitae quam id
            convallis lacus amet vitae ullamcorper. Lobortis nulla lorem
            sollicitudin arcu et pretium nibh
          </span>
        </div>
        <div className="h-[50px] w-[223px] flex justify-center items-center gap-[17px] bg-[#1e418d] pr-5 rounded-[10px]">
          <input
            type="text"
            placeholder="Search an address"
            className="font-bold text-[15px] w-full max-w-[223px] h-full bg-[#1e418d] rounded-[10px] leading-[24px] text-center text-white"
          />
          <img
            src="/search.svg"
            alt="search icon"
            className="w-4 h-4 mx-2 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
