import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex w-full h-full">
      {/* Image side */}
      <div className="justify-center items-center hidden md:flex w-[40%]">
        <img
          src="/login.svg"
          alt="login-image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Login form side */}
      <div className="w-full md:w-[60%] flex flex-col items-center gap-7 pt-[40px]">
        <span className="font-bold text-[40px] leading-[48px] capitalize text-black">
          Login
        </span>
        <div className="flex flex-col gap-8 w-full max-w-md">
          <div className="flex flex-col gap-3.5 w-full">
            <span className="font-semibold text-base text-black">Account</span>
            <div className="flex items-center gap-2.5 h-[48px] py-2 rounded-[10px] border border-[#e6e7ea]">
              <img src="/input1.svg" alt="username" className="w-4 h-4 mx-2" />
              <input
                type="text"
                placeholder="Email or user name"
                className="font-normal text-[14px] leading-[24px] text-black h-full w-full border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2.5 w-full">
            <span className="font-semibold text-base text-black">Password</span>
            <div className="flex items-center gap-2.5 h-[48px] py-2 rounded-[10px] border border-[#e6e7ea]">
              <img src="/input2.svg" alt="password" className="w-4 h-4 mx-2" />
              <input
                type="password"
                placeholder="Your password"
                className="font-normal text-[14px] leading-[24px] h-full w-full border-none focus:outline-none"
              />
            </div>
            <span className="font-normal text-[14px] leading-[24px] text-right text-black cursor-pointer">
              Forgot password
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full cursor-pointer">
            <div className="flex justify-center items-center gap-[17px] bg-[#1e418d] px-[16px] py-[12px] rounded-[10px]">
              <span className="font-bold text-[15px] leading-[24px] text-center text-white ">
                Login
              </span>
            </div>
            <span className="text-[14px] leading-[24px] text-center">
              Don’t you have an account?{" "}
              <Link to="/register" className="text-[#fcba6a] cursor-pointer">
                Register
              </Link>
            </span>
          </div>
          <span className="font-normal text-[14px] leading-[24px] text-center text-[#666666]">
            or login with
          </span>
          <div className="flex gap-5 w-full">
            <div className="flex justify-center items-center gap-2.5 grow h-[48px] px-5 py-2 rounded-[10px] border border-[#e6e7ea]">
              <img
                className="w-[25px] h-[25px] object-cover"
                alt="Google"
                src="/google.svg"
              />
              <span className="font-semibold text-[14px] leading-[24px] text-black">
                Google
              </span>
            </div>
            <div className="flex justify-center items-center gap-2.5 grow h-[48px] px-5 py-2 rounded-[10px] border border-[#e6e7ea]">
              <img
                className="w-[24px] h-[24px] object-cover"
                alt="Facebook"
                src="/fb.svg"
              />
              <span className="font-semibold text-[14px] leading-[24px] text-black">
                Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
