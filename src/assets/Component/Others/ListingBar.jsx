function ListingBar() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[60px] lg:px-20 px-4 py-10 lg:py-[100px] w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[60px] flex-grow">
          <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-2.5">
              <span className="font-bold text-[24px] lg:text-[30px] capitalize text-black">
                Lorem ipsum dolor
              </span>
              <span className="font-normal text-[14px] leading-[24px] text-[#8e8e93]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
                sapiente dolor necessitatibus ad labore quidem eveniet.
              </span>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-center border bg-white rounded-md w-full lg:w-[900px] p-5 lg:gap-0">
              <div className="w-full lg:w-[383px] h-[294px] bg-white mr-5">
                <img src="/map.png" alt="map" className="h-full" />
              </div>
              <div className="flex flex-col items-start lg:items-start w-full lg:w-auto gap-3">
                <span className="font-semibold text-[18px] leading-[24px] text-black">
                  Lorem ipsum dolor
                </span>
                <span className="font-normal text-[14px] leading-[24px] text-[#8e8e93]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, sapiente dolor necessitatibus ad labore.
                </span>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list1.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Owner Name :
                  </span>
                  <span className="font-bold text-[15px] text-black">
                    Lorem ipsum
                  </span>
                </div>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list2.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Approximate mortgage balance :
                  </span>
                  <span className="font-bold text-[15px] text-black">
                    $10000
                  </span>
                </div>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list3.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Prior sale date :
                  </span>

                  <span className="font-bold text-[15px] text-black">
                    21/12/2024
                  </span>
                </div>

                <button
                  className="bg-[#0f2a66] text-white font-bold text-[15px] py-2.5 px-5 rounded-md mt-3"
                  onClick={() => {
                    window.location.href = "/loader";
                  }}
                >
                  View Report
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:justify-center border bg-white rounded-md w-full lg:w-[900px] p-5 lg:gap-0">
              <div className="w-full lg:w-[383px] h-[294px] bg-white mr-5">
                <img src="/map.png" alt="map" className="h-full" />
              </div>
              <div className="flex flex-col items-start lg:items-start w-full lg:w-auto gap-3">
                <span className="font-semibold text-[18px] leading-[24px] text-black">
                  Lorem ipsum dolor
                </span>
                <span className="font-normal text-[14px] leading-[24px] text-[#8e8e93]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, sapiente dolor necessitatibus ad labore.
                </span>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list1.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Owner Name :
                  </span>
                  <span className="font-bold text-[15px] text-black">
                    Lorem ipsum
                  </span>
                </div>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list2.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Approximate mortgage balance :
                  </span>
                  <span className="font-bold text-[15px] text-black">
                    $10000
                  </span>
                </div>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list3.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Prior sale date :
                  </span>

                  <span className="font-bold text-[15px] text-black">
                    21/12/2024
                  </span>
                </div>

                <button
                  className="bg-[#0f2a66] text-white font-bold text-[15px] py-2.5 px-5 rounded-md mt-3"
                  onClick={() => {
                    window.location.href = "/loader";
                  }}
                >
                  View Report
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:justify-center border bg-white rounded-md w-full lg:w-[900px] p-5 lg:gap-0">
              <div className="w-full lg:w-[383px] h-[294px] bg-white mr-5">
                <img src="/map.png" alt="map" className="h-full" />
              </div>
              <div className="flex flex-col items-start lg:items-start w-full lg:w-auto gap-3">
                <span className="font-semibold text-[18px] leading-[24px] text-black">
                  Lorem ipsum dolor
                </span>
                <span className="font-normal text-[14px] leading-[24px] text-[#8e8e93]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, sapiente dolor necessitatibus ad labore.
                </span>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list1.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Owner Name :
                  </span>
                  <span className="font-bold text-[15px] text-black">
                    Lorem ipsum
                  </span>
                </div>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list2.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Approximate mortgage balance :
                  </span>
                  <span className="font-bold text-[15px] text-black">
                    $10000
                  </span>
                </div>
                <div className="flex pb-2 items-center w-full border-b-2 gap-2.5">
                  <img src="/list3.png" alt="list" />
                  <span className="font-normal text-[15px] text-black">
                    Prior sale date :
                  </span>

                  <span className="font-bold text-[15px] text-black">
                    21/12/2024
                  </span>
                </div>

                <button
                  className="bg-[#0f2a66] text-white font-bold text-[15px] py-2.5 px-5 rounded-md mt-3"
                  onClick={() => {
                    window.location.href = "/loader";
                  }}
                >
                  View Report
                </button>
              </div>
            </div>
            {/* Repeat card component for other entries as needed */}
          </div>
        </div>

        <div className="w-full lg:w-80 flex flex-col gap-10">
          <div className="bg-neutral-50 p-[30px] rounded-md border border-solid border-[#e6e7ea]">
            <span className="font-semibold text-[18px] leading-[24px] text-black">
              Search
            </span>
            <div className="flex flex-col gap-5 mt-5">
              <input
                type="text"
                placeholder="Enter an address"
                className="h-[54px] bg-white px-5 py-2.5 rounded-md border border-[#e6e7ea]"
              />
              <button className="bg-[#fcba6a] text-white font-bold text-[15px] py-[15px] rounded-md flex items-center justify-center gap-2">
                Search Now
                <img src="/search.svg" alt="search" className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 rounded-md">
            <span className="font-semibold text-[18px] leading-[24px] text-black">
              Categories
            </span>
            <div className="flex flex-col gap-[30px] py-5">
              <div className="flex justify-between items-center gap-3.5 border-b border-[#e6e7ea] pb-2.5">
                <span className="font-normal text-[16px] text-black">
                  Address Report
                </span>
                <img src="/Arrow.svg" alt="arrow" />
              </div>
              <div className="flex justify-between items-center gap-3.5 border-b border-[#e6e7ea] pb-2.5">
                <span className="font-normal text-[16px] text-black">
                  For Sale
                </span>
                <img src="/Arrow.svg" alt="arrow" />
              </div>
              <div className="flex justify-between items-center gap-3.5 pb-2.5">
                <span className="font-normal text-[16px] text-black">
                  Pre-Foreclosures
                </span>
                <img src="/Arrow.svg" alt="arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="flex justify-center gap-2.5 w-[900px] mx-auto mt-2 mb-20">
        <div className="w-[44px] h-[44px] flex justify-center items-center bg-white rounded-md outline outline-1 outline-[#e6e7ea]">
          <img src="/pagination1.png" alt="arrow" className="text-center" />
        </div>
        <div className="w-[44px] h-[44px] flex justify-center items-center bg-white px-5 py-2.5 rounded-md outline outline-1 outline-[#e6e7ea]">
          <span className="font-bold text-[16px] text-black">1</span>
        </div>
        <div className="w-[44px] h-[44px] flex justify-center items-center bg-[#1e418d] px-5 py-2.5 rounded-md outline outline-1 outline-[#1e418d]">
          <span className="font-bold text-[16px] text-white">2</span>
        </div>
        <div className="w-[44px] h-[44px] flex justify-center items-center bg-white px-5 py-2.5 rounded-md outline outline-1 outline-[#e6e7ea]">
          <span className="font-bold text-[16px] text-black">3</span>
        </div>
        <div className="w-[44px] h-[44px] flex justify-center items-center bg-white rounded-md outline outline-1 outline-[#e6e7ea]">
          <img src="/pagination2.png" alt="arrow" className="" />
        </div>
      </div>
    </>
  );
}

export default ListingBar;
