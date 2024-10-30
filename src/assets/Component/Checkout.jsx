import { useEffect, useState } from "react";
import Banner from "./Home component/Banner";

function Checkout() {
  const [selectedOption, setSelectedOption] = useState(1); // Track selected option
  const [selectedPayment, setSelectedPayment] = useState(null); // Track selected payment method

  useEffect(() => {
    console.log(selectedOption, selectedPayment);
  }, [selectedOption, selectedPayment]);

  const paymentMethods = [
    {
      id: 1,
      name: "Google Pay",
      imgSrc: "/googlepay.png",
    },
    {
      id: 2,
      name: "PayPal",
      imgSrc: "/PayPal.png",
    },
    {
      id: 3,
      name: "Credit or Debit Card",
      imgSrc: "/Mastercard.png",
    },
  ];

  const options = [
    {
      id: 1,
      title: "Run 50 reports per month!",
      duration: "1 month Membership",
      price: "$44.86",
      color: "#fcba6a",
      textColor: "white",
    },
    {
      id: 2,
      title: "3 month Membership",
      description: "Run 50 reports per month!",
      price: "$29.16",
      color: "#ffffff", // Default background
      textColor: "#144d7d", // Default text color
    },
  ];

  return (
    <>
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-20 p-4 md:p-10 lg:p-20">
        <div className="w-full max-w-[772px] flex flex-col items-center gap-3.5">
          <span className="font-bold text-[36px] md:text-[45px] leading-[54px] text-center capitalize text-black">
            Final Step - It only takes 2 minutes to sign up
          </span>
          <span className="font-normal text-[14px] leading-[24px] text-center text-[#8e8e93]">
            Lorem ipsum dolor sit amet consectetur. Ipsum posuere vitae quam id
            convallis lacus amet vitae ullamcorper. Lobortis nulla lorem
            sollicitudin arcu et pretium nibh
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-10 self-stretch">
          <div className="flex flex-col gap-10 w-full md:w-[592px]">
            <div className="flex flex-col gap-3.5 self-stretch h-[212px]">
              <span className="font-semibold text-base text-black">
                Lock in your preferred value plan
              </span>
              <div className="flex flex-col gap-5">
                {options.map((option) => (
                  <div
                    key={option.id}
                    className={`flex justify-between items-center self-stretch h-20 px-5 py-3 rounded-[10px] ${
                      selectedOption === option.id
                        ? `bg-[#fcba6a]`
                        : `outline outline-[#e6e7ea]`
                    }`}
                    onClick={() => setSelectedOption(option.id)} // Set the selected option
                  >
                    <div className="flex flex-col">
                      <span
                        className={`font-bold text-[18px] leading-[24px] ${
                          selectedOption === option.id
                            ? "text-white"
                            : option.textColor
                        }`}
                      >
                        {option.title}
                      </span>
                      <span
                        className={`font-normal text-[14px] leading-[24px] ${
                          selectedOption === option.id
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {option.duration || option.description}
                      </span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <span
                        className={`font-semibold text-[24px] ${
                          selectedOption === option.id
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        {option.price}
                      </span>
                      <span
                        className={`font-normal text-[14px] leading-[24px] ${
                          selectedOption === option.id
                            ? "text-white"
                            : "text-black"
                        }`}
                      >
                        /mo
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3.5 self-stretch">
              <span className="font-semibold text-base text-black">
                Select Your Payment Method
              </span>
              <div className="flex flex-col gap-5">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className={`flex justify-between items-center self-stretch h-20 px-5 py-3 rounded-[10px] ${
                      selectedPayment === method.id
                        ? "bg-[#fcba6a]"
                        : "outline outline-[#e6e7ea]"
                    }`}
                    onClick={() => setSelectedPayment(method.id)} // Set the selected payment method
                  >
                    <div className="flex flex-col">
                      <span
                        className={`font-bold text-[18px] leading-[24px] ${
                          selectedPayment === method.id
                            ? "text-white"
                            : "#144d7d"
                        }`}
                      >
                        {method.name}
                      </span>
                    </div>
                    <img
                      src={method.imgSrc}
                      className={`${
                        method.id === 3
                          ? "w-[135.45px] h-[50px] object-cover"
                          : "w-[75px] h-[30px]"
                      }`}
                      alt={method.name}
                    />
                  </div>
                ))}
              </div>
            </div>
            {selectedPayment ? (
              <form className="flex flex-col gap-8">
                {selectedPayment !== 2 ||
                selectedPayment === 1 ||
                selectedPayment === 3 ? (
                  selectedPayment === 1 ? (
                    <>
                      <div className="flex flex-col gap-3.5 self-stretch">
                        <span className="font-semibold text-base text-black">
                          Account Information
                        </span>

                        <div className="flex items-center gap-2.5 self-stretch h-[54px] rounded-[10px] outline outline-[#e6e7ea]">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="font-normal text-[14px] leading-[24px] text-black px-3 w-full h-full rounded-[10px]"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 self-stretch">
                        <div className="flex items-center gap-2.5 pt-1">
                          <input
                            type="checkbox"
                            className="w-7 h-7 flex items-center gap-2.5 px-2.5 py-2.5 rounded-sm"
                            required
                          />
                          <span className="font-normal text-[14px] leading-[24px] text-[#505051]">
                            Lorem ipsum dolor sit amet consectetur. Ipsum
                            posuere vitae quam id convallis lacus amet vitae
                            ullamcorper.
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 pt-1">
                          <input
                            type="checkbox"
                            className="w-7 h-7 flex items-center gap-2.5 px-2.5 py-2.5 rounded-sm"
                            required
                          />
                          <span className="font-normal text-[14px] leading-[24px] text-[#505051]">
                            Lorem ipsum dolor sit amet consectetur. Ipsum
                            posuere vitae quam id convallis lacus amet vitae
                            ullamcorper.
                          </span>
                        </div>
                      </div>
                      <div className="w-[200px] flex justify-center items-center gap-[17px] bg-[#1e418d] px-[18px] py-[15px] rounded-[10px]">
                        <button
                          type="submit"
                          className="font-bold text-[15px] leading-[24px] text-center text-white"
                        >
                          View Results
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex flex-col gap-3.5 self-stretch">
                        <span className="font-semibold text-base text-black">
                          Account Information
                        </span>
                        <div className="flex gap-3.5 self-stretch">
                          <div className="flex items-center gap-2.5 grow h-[54px] rounded-[10px] outline outline-[#e6e7ea]">
                            <input
                              type="text"
                              placeholder="First Name"
                              className="font-normal text-[14px] leading-[24px] text-black w-full h-full rounded-[10px] px-3"
                              required
                            />
                          </div>
                          <div className="flex items-center gap-2.5 grow h-[54px] rounded-[10px] outline outline-[#e6e7ea]">
                            <input
                              type="text"
                              placeholder="Last Name"
                              className="font-normal text-[14px] leading-[24px] text-black w-full h-full rounded-[10px] px-3"
                              required
                            />
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 self-stretch h-[54px] rounded-[10px] outline outline-[#e6e7ea]">
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="font-normal text-[14px] leading-[24px] text-black px-3 w-full h-full rounded-[10px]"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 self-stretch">
                        <span className="font-semibold text-base text-black">
                          Payment Details
                        </span>
                        <div className="flex items-center gap-2.5 self-stretch h-[54px] rounded-[10px] outline outline-[#e6e7ea]">
                          <input
                            type="text"
                            placeholder="Card number"
                            className="font-normal text-[14px] leading-[24px] text-black px-3 w-full h-full rounded-[10px]"
                            required
                          />
                        </div>
                        <div className="flex gap-3.5 self-stretch">
                          <div className="flex items-center gap-2.5 w-full self-stretch h-[54px] rounded-[10px] outline outline-[#e6e7ea]">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="font-normal text-[14px] leading-[24px] text-black px-3 w-full h-full rounded-[10px]"
                              required
                            />
                          </div>

                          <div className="flex items-center gap-2.5 self-stretch h-[54px] w-full rounded-[10px] outline outline-[#e6e7ea]">
                            <input
                              type="text"
                              placeholder="CVV"
                              className="font-normal text-[14px] leading-[24px] text-black px-3 w-full h-full rounded-[10px]"
                              required
                            />
                          </div>

                          {/* <div className="flex items-center gap-2.5 grow h-[54px] px-5 py-2.5 rounded-[10px] outline outline-[#e6e7ea]">
                    <span className="font-normal text-[14px] leading-[24px] text-black"></span>
                  </div> */}
                        </div>
                      </div>
                      <div className="flex flex-col gap-3.5 self-stretch">
                        <div className="flex items-center gap-2.5 pt-1">
                          <input
                            type="checkbox"
                            className="w-7 h-7 flex items-center gap-2.5 px-2.5 py-2.5 rounded-sm"
                            required
                          />
                          <span className="font-normal text-[14px] leading-[24px] text-[#505051]">
                            Lorem ipsum dolor sit amet consectetur. Ipsum
                            posuere vitae quam id convallis lacus amet vitae
                            ullamcorper.
                          </span>
                        </div>
                        <div className="flex items-center gap-2.5 pt-1">
                          <input
                            type="checkbox"
                            className="w-7 h-7 flex items-center gap-2.5 px-2.5 py-2.5 rounded-sm"
                            required
                          />
                          <span className="font-normal text-[14px] leading-[24px] text-[#505051]">
                            Lorem ipsum dolor sit amet consectetur. Ipsum
                            posuere vitae quam id convallis lacus amet vitae
                            ullamcorper.
                          </span>
                        </div>
                      </div>
                      <div className="w-[200px] flex justify-center items-center gap-[17px] bg-[#1e418d] px-[18px] py-[15px] rounded-[10px]">
                        <button
                          type="submit"
                          className="font-bold text-[15px] leading-[24px] text-center text-white"
                        >
                          View Results
                        </button>
                      </div>
                    </>
                  )
                ) : (
                  <>
                    <div className="flex flex-col gap-3.5 self-stretch">
                      <div className="flex items-center gap-2.5 pt-1">
                        <input
                          type="checkbox"
                          className="w-7 h-7 flex items-center gap-2.5 px-2.5 py-2.5 rounded-sm"
                          required
                        />
                        <span className="font-normal text-[14px] leading-[24px] text-[#505051]">
                          Lorem ipsum dolor sit amet consectetur. Ipsum posuere
                          vitae quam id convallis lacus amet vitae ullamcorper.
                        </span>
                      </div>
                      <div className="flex items-center gap-2.5 pt-1">
                        <input
                          type="checkbox"
                          className="w-7 h-7 flex items-center gap-2.5 px-2.5 py-2.5 rounded-sm"
                          required
                        />
                        <span className="font-normal text-[14px] leading-[24px] text-[#505051]">
                          Lorem ipsum dolor sit amet consectetur. Ipsum posuere
                          vitae quam id convallis lacus amet vitae ullamcorper.
                        </span>
                      </div>
                    </div>
                    <div className="w-[200px] flex justify-center items-center gap-[17px] bg-[#1e418d] px-[18px] py-[15px] rounded-[10px]">
                      <button
                        type="submit"
                        className="font-bold text-[15px] leading-[24px] text-center text-white"
                      >
                        View Results
                      </button>
                    </div>
                  </>
                )}
              </form>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col justify-center gap-[30px] px-4 md:px-0">
            <div className="max-w-[590px] w-full flex flex-col justify-center gap-3.5">
              <span className="font-semibold text-[16px] text-black">
                Order Summary
              </span>
              <div className="flex flex-col gap-3.5 self-stretch p-5 rounded-[10px] border border-solid border-[#e6e7ea]">
                <div className="flex flex-col gap-0.5 self-stretch">
                  <span className="font-normal text-[16px] text-start text-black">
                    3 month Membership
                  </span>
                  <div className="flex gap-3.5 self-stretch">
                    <span className="font-normal text-[16px] text-center text-black">
                      All-Access:{" "}
                    </span>
                    <span className="font-normal text-[16px] text-center text-black">
                      4 Search Types
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-end self-stretch">
                  <span className="font-semibold text-[16px] text-right text-black">
                    Total Today:
                  </span>
                  <span className="font-semibold text-[32px] text-[#fcba6a]">
                    $87.47
                  </span>
                  <span className="font-normal text-[14px] leading-[24px] text-[#666666]">
                    Plus applicable sales tax
                  </span>
                </div>
              </div>
            </div>

            <div className="max-w-[590px] w-full flex flex-col justify-center gap-3.5">
              <span className="font-semibold text-[16px] text-black">
                Your Membership Benefits Include
              </span>
              <div className="flex flex-col gap-[30px] self-stretch p-5 rounded-[10px] border border-solid border-[#e6e7ea]">
                <div className="flex flex-col gap-3.5 self-stretch p-3">
                  {/* Adjusted padding here */}
                  {[
                    {
                      label: "Property Reports",
                      imgSrc: "/v1.png", // Add the correct image path
                    },
                    {
                      label: "Owner Contact Info",
                      imgSrc: "/v9.png", // Add the correct image path
                    },
                    {
                      label: "Owners & Residents",
                      imgSrc: "/v2.png", // Add the correct image path
                    },
                    {
                      label: "Deed History",
                      imgSrc: "/v5.png", // Add the correct image path
                    },
                    {
                      label: "Liens",
                      imgSrc: "/v8.png", // Add the correct image path
                    },
                    {
                      label: "Faster Searching in seconds",
                      imgSrc: "/v2.png", // Add the correct image path
                    },
                    {
                      label: "Four Ways to search & discover",
                      imgSrc: "/v9.png", // Add the correct image path
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3.5 self-stretch border border-solid border-[#e6e7ea] rounded-[10px] bg-white px-5 py-2"
                    >
                      <div className="h-10 w-10 flex flex-col justify-center items-center gap-2.5 rounded-[20px] border-2 border-solid border-[#5687ee]">
                        <img
                          src={benefit.imgSrc}
                          alt={benefit.label}
                          className="w-5 h-5 mx-2"
                        />
                      </div>
                      <span className="font-normal text-[16px] text-center text-black">
                        {benefit.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bonus Benefit title without border */}
                <span className="font-semibold text-[16px] text-black">
                  Bonus Benefit
                </span>

                {/* Notification text with border */}
                <div className="flex flex-col gap-3.5 self-stretch border border-solid border-[#e6e7ea] rounded-[10px]">
                  <div className="flex items-center gap-3.5 self-stretch bg-white px-5 py-2">
                    <div className="h-10 w-10 flex flex-col justify-center items-center gap-2.5 rounded-[20px] border-2 border-solid border-[#fcba6a]">
                      <img
                        src="/v10.png"
                        alt="images"
                        className="w-5 h-5 mx-2"
                      />
                    </div>
                    <span className="font-normal text-[16px] text-center text-black">
                      You can choose to be notified when reports change!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[590px] w-full flex flex-col justify-center gap-3.5">
              <span className="font-semibold text-[16px] text-black">
                Billing FAQ
              </span>
              <div className="flex flex-col gap-3.5 self-stretch p-5 rounded-[10px] border border-solid border-[#e6e7ea]">
                {[
                  "Lorem ipsum dolor sit amet consectetur. Ipsum posuere vitae quam id convallis lacus amet vitae ullamcorper. Lobortis nulla lorem sollicitudin arcu et pretium.",
                  "Lorem ipsum dolor sit amet consectetur. Ipsum posuere vitae quam id convallis lacus amet vitae ullamcorper. Lobortis nulla lorem sollicitudin arcu et pretium.",
                ].map((faq, index) => (
                  <div
                    key={index}
                    className="flex flex-col gap-0.5 self-stretch"
                  >
                    <span className="font-normal text-[16px] text-black">
                      {faq}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Banner />
    </>
  );
}
export default Checkout;
