import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      style={{ boxShadow: "0px 2px 15px 0px rgba(0, 0, 0, 0.15)" }}
      className="w-full h-[68px] py-4 px-6 md:px-[40px] flex justify-between items-center"
    >
      {/* Logo Section */}
      <div className="w-[184px] h-[46px] flex items-center">
        <img src="/Logo.svg" alt="Navigation" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {/* Phone Contact */}
        <div className="flex flex-row items-center gap-2">
          <img className="w-5" src="/Vector-1.svg" alt="Phone" />
          <p className="font-medium text-sm leading-[14px]">1-866-202-7417</p>
        </div>

        {/* Register/Login */}
        <div className="flex flex-row items-center gap-2">
          <img className="w-5" src="/Vector-2.svg" alt="Login" />
          <p className="font-medium text-sm leading-[14px]">Register / Login</p>
        </div>

        {/* Request a Demo Button */}
        <button className="w-[221.75px] h-[54px] flex items-center justify-center gap-2 rounded-md bg-[#1E418D]">
          <img
            className="w-[24.75px] h-[22px]"
            src="/Vector.svg"
            alt="Demo Icon"
          />
          <span className="w-[22px] border border-white transform -rotate-90"></span>
          <p
            style={{ fontFamily: "Poppins" }}
            className="font-bold text-xs leading-6 text-white"
          >
            Request a demo
          </p>
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-[68px] z-20 left-0 w-full bg-white shadow-lg flex flex-col items-center py-4 gap-4"
        >
          {/* Phone Contact */}
          <div className="flex flex-row justify-center items-center gap-2 mb-4">
            <img className="w-5" src="/Vector-1.svg" alt="Phone" />
            <p className="font-medium text-sm leading-[14px]">1-866-202-7417</p>
          </div>

          {/* Register/Login */}
          <div className="flex flex-row justify-center items-center gap-2 mb-4">
            <img className="w-5" src="/Vector-2.svg" alt="Login" />
            <p className="font-medium text-sm leading-[14px]">
              Register / Login
            </p>
          </div>

          {/* Request a Demo Button */}
          <div className="flex justify-center w-full">
            <button className="w-auto h-[54px] flex items-center justify-center gap-2 rounded-md bg-[#1E418D] px-4 py-2">
              <img
                className="w-[24.75px] h-[22px]"
                src="/Vector.svg"
                alt="Demo Icon"
              />
              <span className="w-[22px] border border-white transform -rotate-90"></span>
              <p
                style={{ fontFamily: "Poppins" }}
                className="font-bold text-xs leading-6 text-white"
              >
                Request a demo
              </p>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
