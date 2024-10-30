import { useLocation } from "react-router-dom";

function Searching() {
  const location = useLocation();

  // Determine if the current route is /login or /register
  const isSearching = location.pathname === "/records";
  return (
    <div
      className="h-screen w-full flex flex-col items-center gap-10 px-5 py-20"
      style={{ backgroundImage: "url('/records.png')" }}
    >
      <div
        className={`flex flex-col ${
          isSearching ? "items-center" : "items-start"
        }  gap-5 self-stretch pl-5`}
      >
        <div
          className={`flex flex-col ${
            isSearching ? "items-center" : "items-start"
          } gap-2.5`}
        >
          <span className="font-bold text-[40px] md:text-[60px] leading-[50px] text-center md:leading-[70px] capitalize text-white">
            Minnesota
          </span>
          <span className="font-semibold text-[18px] md:text-[24px] leading-[24px] text-center text-white">
            Get Access to Property Information
          </span>
        </div>
      </div>
      <div
        className={`flex flex-col ${
          isSearching ? "items-center" : "items-start"
        } w-full pl-5`}
      >
        {/* Button group container */}
        <div
          className={`flex items-center ${
            isSearching ? "justify-center" : "justify-start"
          } gap-1 w-full`}
        >
          <div className="h-[54px] flex justify-center items-center gap-2 bg-[#fcba6a] px-5 py-3 rounded-tl-[10px]">
            <span className="font-semibold text-[15px] leading-[24px] text-center text-white">
              Address Report
            </span>
          </div>
          <div className="h-[54px] flex justify-center items-center gap-2 bg-[#d9e8f4] px-5 py-3">
            <span className="font-semibold text-[15px] leading-[24px] text-center text-black">
              For Sale
            </span>
          </div>
          <div className="h-[54px] flex justify-center items-center gap-2 bg-[#d9e8f4] px-5 py-3 rounded-tr-[10px]">
            <span className="font-semibold text-[15px] leading-[24px] text-center text-black">
              Pre-Foreclosures
            </span>
          </div>
        </div>
        {/* Search box */}
        <div className="w-full max-w-[936px] flex items-center justify-center gap-2.5 bg-white p-5 rounded-[10px]">
          <div className="flex items-center gap-2.5 grow">
            <div className="flex items-center gap-2.5 grow h-[54px] px-5 py-2.5 rounded-[10px] outline-1 outline-t-1 outline-l-1 outline-r-1 outline-b-1 outline outline-[#e6e7ea]">
              <span className="font-normal text-[14px] leading-[24px] text-black">
                Minnesota
              </span>
            </div>
            <div className="h-[54px] flex justify-center items-center gap-2 bg-[#1e418d] px-5 py-2 rounded-[10px]">
              <span className="font-bold text-[15px] leading-[24px] text-center text-white">
                Search Now
              </span>
              <img
                src="/search.svg"
                className="w-[21.995702743530273px] h-[22px] ml-2"
                alt="search"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Searching;
