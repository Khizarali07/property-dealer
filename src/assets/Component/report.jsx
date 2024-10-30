import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Change useHistory to useNavigate
import "../CSS/report.css";

function Reports() {
  const reportTitles = [
    "Deed Info",
    "Owner History",
    "Sales History",
    "Property Details",
  ];
  const detailBox = [
    {
      name: "Deed Information",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      points: ["Point #1", "Point #2", "Point #3"],
    },
    {
      name: "Owner Details",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      points: [
        "Property owner names",
        "Contact information",
        "Possible other addresses",
        "Home ownership history",
      ],
    },
    {
      name: "Sales Details",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      points: ["Point #1", "Point #2"],
    },
    {
      name: "Property Details",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      points: ["Point #1", "Point #2", "Point #3", "Point #4", "Point #5"],
    },
  ];

  const [activeBoxIndex, setActiveBoxIndex] = useState(0);
  const [remainingTime, setRemainingTime] = useState(8); // Total time for all boxes (2 seconds each for 4 boxes)
  const navigate = useNavigate(); // Change to useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBoxIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % reportTitles.length;

        // If nextIndex is 0, all boxes have been displayed
        if (nextIndex === 0) {
          // Navigate to /checkout after all boxes have been displayed
          navigate("/checkout"); // Change to useNavigate
        }

        return nextIndex;
      });

      setRemainingTime((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 2; // Decrease by 2 seconds for each box displayed
        }
        return 0; // Prevent negative time
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-start py-[60px] gap-10 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url(/bgImage.svg)" }}
    >
      <div className="flex flex-col gap-10 grow max-w-full lg:max-w-[600px]">
        <div className="flex flex-col gap-2.5 self-stretch">
          <span className="font-bold text-[40px] lg:text-[60px] leading-tight capitalize text-white text-center lg:text-left">
            Reports building
          </span>
          <span className="font-semibold text-[16px] lg:text-[19px] leading-tight text-white text-center lg:text-left">
            Lorem ipsum dolor sit amet consectetur.
          </span>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-[30px] rounded-[10px]">
          {reportTitles.map((title, index) => (
            <div
              key={index}
              className="report-box"
              style={{ animationDelay: `${index * 2}s` }}
            >
              <div className="h-10 w-10 flex justify-center items-center rounded-full border-2 border-solid border-black overflow-hidden">
                <img
                  src={`/report${index + 1}.svg`}
                  alt="Report Icon"
                  className="h-5 w-5 object-cover"
                />
              </div>
              <span className="font-bold text-[14px] lg:text-[16px] text-left text-black">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Conditionally render the active detail box */}
      <div
        className="h-[401px] w-full lg:w-[392px] flex flex-col justify-between bg-white p-5 rounded-[10px] animated-box"
        key={activeBoxIndex}
      >
        <div className="flex flex-col gap-5 self-stretch">
          <span className="font-semibold text-[18px] lg:text-[20px] leading-[24px] text-black">
            {detailBox[activeBoxIndex].name}
          </span>
          <div className="flex flex-col gap-2.5 self-stretch">
            <span className="font-normal text-[12px] lg:text-[14px] leading-[24px] text-black">
              {detailBox[activeBoxIndex].description}
            </span>
            <ul className="list-disc pl-5 font-normal text-[12px] lg:text-[14px] leading-[24px] text-black">
              {detailBox[activeBoxIndex].points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
        <span className="font-normal text-[12px] lg:text-[14px] text-center text-[#fcba6a]">
          Remaining time: {remainingTime > 0 ? remainingTime : "0"} seconds
        </span>
      </div>
    </div>
  );
}

export default Reports;
