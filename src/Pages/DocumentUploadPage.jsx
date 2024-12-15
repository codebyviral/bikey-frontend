import React from 'react'

export default function DocumentUploadPage() {
    return (
        <div>
            <div className="  -mt-5 flex flex-col items-center  min-h-screen bg-white p-4">
                <div className="bg-white lg:w-[60%]  shadow-lg rounded-lg p-6 w-full max-w-lg relative">
                    {/* this image of strting page of mobileverification */}
                    <img className='-mt-6 size-4/5 mx-auto  ' src="Startingimage.jpg" alt="error" />
                    {/* this is a container for font in middle */}
                    <div className='mt-6 flex items-center justify-center'>
                        <h2 className='text-2xl font-bold text-gray-500 mr-2 '>Upload</h2><br /><h2 className='text-2xl font-bold text-blue-700'>Driving Licence</h2>
                    </div>
                    {/* this is a container for mobile input  */}
                    <hr className='bg-black mt-3 ' />
                    <div className="text-center mt-6">
                        <h6 className="text-[10px]  text-gray-800">
                            Uploading Licence is mandatory other wise no bikes are available for
                        </h6>
                        <h6 className="text-[10px] text-gray-800">
                            you bitch as you dont deserve.
                        </h6>
                    </div>
                    <div className="space-y-6 mt-6">
                        {/* Driving Licence Upload */}
                        <div className="p-2 border-2 border-gray-300 rounded-2xl">
                            <div className="relative p-1 border-2 border-gray-500 rounded-xl">
                                <label className="block w-full py-3 sm:py-4 text-gray-700 font-semibold text-center cursor-pointer hover:border-blue-500">
                                    Choose Driving Licence
                                    <input
                                        type="file"
                                        multiple
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </label>
                            </div>
                        </div>

                        {/* College ID Upload */}
                        <div className="p-2 border-2 border-gray-300 rounded-2xl">
                            <div className="relative p-1 border-2 border-gray-500 rounded-xl">
                                <label className="block w-full py-3 sm:py-4 text-gray-700 font-semibold text-center cursor-pointer hover:border-blue-500">
                                    Choose College ID
                                    <input
                                        type="file"
                                        multiple
                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <input
                            className="w-full px-4 py-2 mt-3 border border-gray-700 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            type="text"
                            placeholder="Emergency Contact No"
                            maxLength={10}

                        />
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
