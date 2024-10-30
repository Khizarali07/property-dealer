import { useState, useEffect, useRef } from "react";
import Connect from "./Home component/Connect";
import Banner from "./Home component/Banner";
import Header from "./Home component/header";
import LoginImage from "/login.svg";
import Leverage from "./Home component/leverage";
import Reviews from "./Home component/Reviews";
import Addressdr from "./Home component/Addressdr";
import "../CSS/home.css";

function Home() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  // Array to hold refs for each section
  const sectionsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slideInUp");

            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const directories = [
    "AK",
    "AL",
    "AR",
    "AZ",
    "CA",
    "CO",
    "CT",
    "DC",
    "DE",
    "FL",
    "GA",
    "HI",
    "IA",
    "ID",
    "IL",
    "IN",
    "KS",
  ];
  const filteredDirectories = directories.filter((dir) =>
    dir.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <>
      {/* Header Section */}
      <div
        className="flex flex-col lg:flex-row lg:gap-16 gap-8 p-4 w-full relative overflow-hidden"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="absolute left-0 top-32 flex flex-col ml-10 gap-4 text-start lg:text-left w-full lg:w-[544px]">
          <h1 className="font-bold text-4xl lg:text-5xl xl:text-[60px] leading-tight text-black z-10">
            Get In-Depth Property Insights
          </h1>
          <p className="text-base lg:text-lg text-black z-10">
            Start by searching a property
          </p>
        </div>

        {/* Search Bar */}
        <div className="absolute left-0 w-full bottom-48 ml-10 lg:w-[65%] z-10">
          <div className="flex items-center gap-2.5 bg-white p-4 rounded-lg">
            <div className="relative flex flex-col items-center gap-2.5 grow">
              <div className="flex items-center gap-2.5 h-12 w-full rounded-lg border border-[#dae6f1]">
                <img src="/input6.svg" alt="search" className="w-4 h-4 mx-2" />
                <input
                  type="text"
                  placeholder="Search an address..."
                  className="text-sm lg:text-base text-gray-700 w-full h-full"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setTimeout(() => setIsFocused(false), 100)}
                />
              </div>
              {isFocused && (
                <div className="absolute top-full left-0 mt-1 w-full bg-white border border-[#dae6f1] rounded-lg shadow-lg max-h-48 overflow-y-auto">
                  {filteredDirectories.length > 0 ? (
                    filteredDirectories.map((dir, index) => (
                      <div
                        key={index}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                        onMouseDown={() => setQuery(dir)}
                      >
                        {dir}
                      </div>
                    ))
                  ) : (
                    <div className="p-2 text-gray-500">No results found</div>
                  )}
                </div>
              )}
            </div>
            <button
              className="h-12 flex justify-center items-center gap-2 bg-[#1e418d] px-4 py-2 rounded-lg"
              onClick={() => (window.location.href = "/listing")}
            >
              <span className="font-bold text-sm lg:text-base text-white">
                Search Now
              </span>
              <svg className="w-5 h-5 text-white"></svg>
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-[600px] h-[700px] mt-10">
          <img
            src={LoginImage}
            alt="Property insights image"
            className="absolute top-28 -right-[120px] w-[900px] h-[1100px] object-cover rounded-tl-[600px] rounded-tr-[600px]"
          />
        </div>
      </div>

      {/* Sections with animation */}
      <Header ref={(el) => (sectionsRef.current[0] = el)} className="section" />
      <Banner />
      <Connect
        ref={(el) => (sectionsRef.current[2] = el)}
        className="section"
      />
      <Leverage
        ref={(el) => (sectionsRef.current[3] = el)}
        className="section"
      />
      <Reviews
        ref={(el) => (sectionsRef.current[4] = el)}
        className="section"
      />
      <Addressdr />
    </>
  );
}

export default Home;
