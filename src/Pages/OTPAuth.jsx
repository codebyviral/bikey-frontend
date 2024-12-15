import { useState,useRef } from "react";

export default function OTPAuth() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputRefs = useRef([]);

    const handleChange = (index, value) => {
        if (/^\d?$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== '' && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === 'Backspace' && otp[index] === '' && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };
    return (
        <div>
            <div className="  -mt-5 flex flex-col items-center  min-h-screen bg-white p-4 ">
                <div className="bg-white lg:w-[60%]  shadow-lg rounded-lg p-6 w-full max-w-lg  ">
                    {/* this image of strting page of mobileverification */}
                    <div className="w-full h-full sticky">
                    <img className='-mt-6' src="Startingimage.jpg" alt="error" />

                    </div>
                    {/* this is a container for font in middle */}
                    <div className='mt-6 flex items-center justify-center '>
                        <h2 className='text-2xl font-bold text-gray-500 mr-2 '>Verify</h2><br /><h2 className='text-2xl font-bold text-blue-700 '>OTP</h2>
                    </div>
                    <hr className='bg-black mt-3 ' />
                    {/* this is a container for mobile input  */}
                    <div className="flex justify-center items-center mt-4">
                        <div className="flex justify-center space-x-2 sm:space-x-3">
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength="1"
                                    value={digit}
                                    onChange={(e) => handleChange(index, e.target.value)}
                                    onKeyDown={(e) => handleKeyDown(index, e)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="w-12 h-10 sm:w-13 sm:h-12 lg:w-19 border-zinc-700 lg:h-20 text-center text-lg border rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            ))}
                        </div>
                    </div>

                    
                    {/* this is a container for Submit button  */}
                    <div className="mt-4">
                        <button className="w-full rounded-2xl sm:w-[100%] md:w-[100%] lg:w-[100%] bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4  mt-1 ">
                            Submit
                        </button>
                    </div>
                    <div className="text-center mt-6">
                        <h6 className="text-[10px]  text-gray-800">
                            By confirming the account creation, you are agreeing with our privacy
                        </h6>
                        <h6 className="text-[10px] text-gray-800">
                            policies and terms and conditions
                        </h6>
                    </div>
                </div>
            </div>
          </div>
    )
}
