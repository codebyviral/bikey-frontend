import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function MobileVerificationPage() {
  const [num, setNum] = useState();
  const setUserNum = (e) => {
    setNum(e.target.value);
  };

  const navigate = useNavigate();

  const saveSettings = async (settings) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (settings) {
          resolve("Success");
        } else {
          reject("Failed");
        }
      }, 500);
    });
  };

  const redirectToLogin = (settings) => {
    // Store user's number to localstorage
    localStorage.setItem("userNumber", num);
    toast.promise(saveSettings(settings), {
      loading: "Sending OTP...",
      success: <b>OTP Sent Successfully!</b>,
      error: <b>Error Sending OTP.</b>,
    });
    navigate("/otp-verify");
  };

  return (
    <div>
      <div className="-mt-5 flex flex-col items-center  min-h-screen bg-white p-4">
        <div className="bg-white lg:w-[60%]  shadow-lg rounded-lg p-6 w-full max-w-lg relative">
          {/* this image of strting page of mobileverification */}
          <img
            className="-mt-10 overflow-hidden"
            src="Startingimage.jpg"
            alt="error"
          />
          {/* this is a container for font in middle */}
          <div className="mt-6 flex items-center justify-center">
            <h2 className="text-2xl font-bold text-blue-700 mr-2 ">Register</h2>
            <br />
            <h2 className="text-2xl font-bold text-gray-500">to Get a Ride</h2>
          </div>
          {/* this is a container for mobile input  */}
          <hr className="bg-black mt-3 " />
          <div className="mt-6">
            <input
              id="mobileNum"
              className="w-full px-4 py-2 mt-3 border border-gray-500 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
              type="text"
              placeholder="Enter Mobile No."
              maxLength={10}
              onChange={(e) => setUserNum(e)}
            />
          </div>
          {/* this is a container for Submit button  */}
          <div className="mt-4">
            <button
              onClick={redirectToLogin}
              className="w-full rounded-2xl sm:w-[100%] md:w-[100%] lg:w-[100%] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4  mt-1 "
            >
              Submit
            </button>
          </div>
          <div className="mt-4">
            <Link to="/Otp-verify">
              <button className="w-full rounded-2xl sm:w-[100%] md:w-[100%] lg:w-[100%] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4  mt-1 ">
                Register Your Bike
              </button>
            </Link>
          </div>
          <div className="text-center mt-6">
            <h6 className="text-[10px]  text-gray-800">
              By confirming the account creation, you are agreeing with our
              privacy
            </h6>
            <h6 className="text-[10px] text-gray-800">
              policies and terms and conditions
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
