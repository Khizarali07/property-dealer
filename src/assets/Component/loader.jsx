import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Loader.css"; // Import CSS file for the animation

function Loader() {
  const navigate = useNavigate();
  const totalAnimationTime = 6 * 5; // 6 boxes, 1-second delay per box

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/report");
    }, totalAnimationTime * 1000); // Convert to milliseconds

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, [navigate, totalAnimationTime]);

  return (
    <div
      className="flex justify-center items-center w-full h-full bg-cover bg-center"
      style={{ backgroundImage: "url('/bgImage.svg')" }}
    >
      <div className="flex flex-col items-center gap-20 px-4 py-10 max-w-[1440px] w-full min-h-[80vh] overflow-y-auto">
        <div className="flex flex-col items-center gap-2.5 self-stretch">
          <span className="font-bold text-[60px] leading-[70px] text-center capitalize text-white">
            Searching
          </span>
          <span className="font-semibold text-[24px] leading-[24px] text-center text-white">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-[30px]">
          {[
            "Property Specs",
            "Owner Information",
            "Deed Information",
            "Sales History",
            "Lien Information",
            "Valuations",
          ].map((label, index) => (
            <div
              key={index}
              className="loader-box" // Apply animation class
              style={{ animationDelay: `${index * 5}s` }} // Stagger each box
            >
              <div className="loader-icon">
                <img
                  src={`/report${index + 1}.svg`}
                  alt="Report Icon"
                  className="h-5 w-5 object-cover"
                />
              </div>
              <span className="font-bold text-[16px] text-black">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Loader;
