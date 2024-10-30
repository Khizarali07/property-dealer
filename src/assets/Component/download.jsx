import { Link } from "react-router-dom";

function Download() {
  return (
    <>
      <div
        className="flex justify-center items-center min-h-screen"
        style={{
          backgroundImage: "url(/bgImage.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center gap-[60px] px-6 py-[60px] max-w-[90%] lg:max-w-[800px]">
          <div className="w-full flex flex-col items-center gap-3.5 text-center">
            <span className="font-bold text-[40px] lg:text-[60px] leading-tight text-white">
              Your Results are Ready!
            </span>
            <span className="font-semibold text-[16px] lg:text-[19px] leading-tight text-white">
              Continue to explore info on owners, liens, deeds, and more.
            </span>
          </div>
          <div className="w-full flex flex-col justify-center gap-[20px] bg-white p-8 rounded-lg">
            <div className="flex flex-col gap-3.5 w-full">
              <span className="font-semibold text-base text-black">
                View Your Results
              </span>
              <div className="flex items-center gap-2.5 h-[54px] px-5 py-2.5 rounded-lg border border-[#e6e7ea]">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-transparent outline-none text-black text-[14px]"
                />
              </div>
            </div>
            <span className="font-normal text-[14px] leading-[24px] text-[#505051]">
              {`By clicking "Continue" you agree that you are 18 years of age and
              have agreed to our Terms of Service and Privacy Policy and you
              agree to receive email.`}
            </span>
            <div className="flex flex-col justify-center items-center gap-3.5 w-full">
              <button className="w-[200px] h-[54px] flex justify-center items-center bg-[#1e418d] px-5 py-[15px] rounded-lg text-white font-bold text-[15px]">
                Continue
              </button>
              <span className="text-[14px] leading-[24px] text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-[#FCBA6A] cursor-pointer">
                  Login
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
