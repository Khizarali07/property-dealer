function RecordsBar() {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[30px] lg:gap-[60px] px-4 lg:px-20 py-10">
        {/* Main Content */}
        <div className="flex flex-col gap-[30px] lg:gap-[60px] grow">
          {/* Popular Cities Section */}
          <div className="flex flex-col gap-5 lg:gap-10">
            <div className="flex flex-col gap-2.5">
              <span className="font-bold text-[24px] lg:text-[30px] capitalize text-black">
                Popular Cities in Minnesota
              </span>
              <span className="font-normal text-[14px] leading-[24px] text-[#8e8e93]">
                Look into each city page to learn more about the streets, number
                of properties, and house values.
              </span>
            </div>

            {/* City List */}
            <div className="flex flex-col gap-5 bg-white px-5 pt-5 pb-10 rounded-md shadow-md">
              {/* Header Row */}
              <div className="flex flex-wrap lg:flex-nowrap items-end gap-3.5 border-b border-[#e6e7ea] pb-2.5">
                <span className="font-semibold text-[16px] text-[#1c408e] flex-1">
                  City
                </span>
                <span className="font-semibold text-[16px] text-[#1c408e] flex-1">
                  Number of Properties
                </span>
                <span className="font-semibold text-[16px] text-[#1c408e] flex-1">
                  Average Property Value
                </span>
              </div>

              {/* Data Rows */}
              {[
                {
                  city: "Minneapolis",
                  properties: "352,210",
                  value: "$649,100",
                },
                {
                  city: "Saint Paul",
                  properties: "243,992",
                  value: "$593,046",
                },
                { city: "Rochester", properties: "352,210", value: "$411,637" },
                { city: "Duluth", properties: "40,367", value: "$241,946" },
                {
                  city: "Maple Grove",
                  properties: "25,817",
                  value: "$580,997",
                },
                {
                  city: "Saint Cloud",
                  properties: "21,450",
                  value: "$284,630",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-wrap lg:flex-nowrap items-end gap-3.5"
                >
                  <span className="font-bold text-[16px] text-black flex-1">
                    {item.city}
                  </span>
                  <span className="font-normal text-[16px] text-black flex-1">
                    {item.properties}
                  </span>
                  <span className="font-normal text-[16px] text-black flex-1">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2.5">
              <div className="w-[44px] h-[44px] flex justify-center items-center bg-white rounded-md outline outline-1 outline-[#e6e7ea]">
                <img
                  src="/pagination1.png"
                  alt="arrow"
                  className="text-center"
                />
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
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full h-auto lg:w-80 flex flex-col gap-10">
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
      {/* All Cities Section */}
      <div className="w-full lg:w-[90vw] flex flex-col gap-5 px-4 lg:px-20 py-10 bg-white rounded-md">
        <div className="flex flex-col gap-2.5">
          <span className="font-bold text-[24px] lg:text-[30px] capitalize text-black">
            All Cities in Minnesota
          </span>
          <span className="font-normal text-[14px] leading-[24px] text-[#8e8e93]">
            Click on a city below to see all streets in that city. Explore
            information on the average number of properties, house value, and
            lot size for each street.
          </span>
        </div>

        {/* Responsive list of cities */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 p-5 border rounded-md bg-gray-50">
          {[
            "Ada",
            "Big Lake",
            "Chatfield",
            "Donnelly",
            "Elko New Market",
            "Adams",
            "Bigelow",
            "Chisago City",
            "Dover",
            "Elkton",
            "Adrian",
            "Bigfork",
            "Chisholm",
            "Dovray",
            "Ellendale",
            "Afton",
            "Bingham Lake",
            "Chokio",
            "Duluth",
            "Ellsworth",
            "Aitkin",
            "Bird Island",
            "Circle Pines",
            "Dumont",
            "Elmore",
            "Akeley",
            "Biwabik",
            "Clara City",
            "Dundas",
            "Ely",
            "Albany",
            "Blackduck",
            "Claremont",
            "Elysian",
            "Embarrass",
            "Albert Lea",
            "Blaine",
            "Clarissa",
            "Emily",
            "Eagan",
          ].map((city, index) => (
            <span
              key={index}
              className="font-semibold text-[14px] sm:text-[16px] text-black"
            >
              {city}
            </span>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2.5 mt-5">
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
          <div className="w-[44px] h-[44px] flex justify-center items-center bg-white px-5 py-2.5 rounded-md outline outline-1 outline-[#e6e7ea]">
            <span className="font-bold text-[16px] text-black">4</span>
          </div>
          <div className="w-[44px] h-[44px] flex justify-center items-center bg-white px-5 py-2.5 rounded-md outline outline-1 outline-[#e6e7ea]">
            <span className="font-bold text-[16px] text-black">...</span>
          </div>
          <div className="w-[44px] h-[44px] flex justify-center items-center bg-white rounded-md outline outline-1 outline-[#e6e7ea]">
            <img src="/pagination2.png" alt="arrow" className="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecordsBar;
