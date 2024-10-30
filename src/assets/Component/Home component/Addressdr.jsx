function Addressdr() {
  return (
    <div
      className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-[60px] px-6 md:px-20 py-[50px] md:py-[100px]"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="flex flex-col items-center gap-3.5">
        <span className="font-bold text-3xl md:text-[45px] leading-[54px] text-center capitalize text-black">
          Browse our Address Directory by State
        </span>
        <span className="font-normal text-sm md:text-[14px] leading-[24px] text-center text-[#8e8e93]">
          Lorem ipsum dolor sit amet consectetur. Ipsum posuere vitae quam id
          convallis lacus amet vitae ullamcorper. Lobortis nulla lorem
          sollicitudin arcu et pretium nibh
        </span>
      </div>
      <div className="flex flex-col justify-center gap-10 self-stretch bg-white p-6 md:p-10 rounded-md">
        <div className="flex flex-wrap justify-center md:justify-start gap-3.5 self-stretch">
          {[
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
          ].map((state) => (
            <span
              key={state}
              className="flex-1 text-center font-bold text-[16px] text-[#0f2a66] cursor-pointer"
            >
              {state}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3.5 self-stretch">
          {[
            "KY",
            "LA",
            "MA",
            "MD",
            "ME",
            "MN",
            "MO",
            "MS",
            "MT",
            "NC",
            "ND",
            "NE",
            "NH",
            "NJ",
            "NM",
          ].map((state) => (
            <span
              key={state}
              className="flex-1 text-center font-bold text-[16px] text-[#0f2a66] cursor-pointer"
            >
              {state}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap justify-center md:justify-start gap-3.5 self-stretch">
          {[
            "NV",
            "NY",
            "OH",
            "OK",
            "OR",
            "PA",
            "RI",
            "SC",
            "SD",
            "TN",
            "TX",
            "UT",
            "VA",
            "VT",
            "WA",
            "WI",
            "WV",
            "WY",
          ].map((state) => (
            <span
              key={state}
              className="flex-1 text-center font-bold text-[16px] text-[#0f2a66] cursor-pointer"
            >
              {state}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Addressdr;
