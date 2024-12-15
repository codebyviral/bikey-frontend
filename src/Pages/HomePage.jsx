import { useState, useEffect } from "react";

export default function HomePage() {
  const [fromDate, setFromDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toDate, setToDate] = useState("");
  const [toTime, setToTime] = useState("");
  const [address, setAddress] = useState("Address");
  const [liveTime, setLiveTime] = useState("");

  // Hook for displaying the live time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
      setLiveTime(formattedTime);
    };

    const interval = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-gray-50 shadow-lg rounded-lg p-6 w-full max-w-lg relative">
        <div className="flex justify-between items-center mb-6">
          {/* for bikey logo */}
          <div className="w-18 h-17 flex items-center justify-center absolute left-1/2 transform -translate-x-1/2">
            <img
              src="image.png"
              alt="Bikey Logo"
              className="w-15 h-12 object-contain mb-4"
            />
          </div>
          {/* for user logo */}
          <div className="w-8 h-8 flex items-center justify-center ml-auto">
            <img
              src="User.png"
              alt="User Logo"
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>
        {/* container for the from location date and time */}

        {/* Card Container */}
        <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-lg relative">
          {/* From Section */}
          <div className="flex justify-between items-center mb-4 ">
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm">From</label>
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                  className="text-black text-sm font-semibold focus:outline-none"
                />

                <input
                  type="time"
                  value={fromTime}
                  onChange={(e) => setFromTime(e.target.value)}
                  className="text-black text-sm font-semibold focus:outline-none"
                />
              </div>
            </div>
            <details className="relative group">
              <summary className="text-sm  text-black cursor-pointer">
                {address}
              </summary>
              <div className="absolute mt-1 z-50 bg-white shadow-lg rounded p-2 text-gray-700 w-36 group-open:visible group-open:opacity-100">
                <button
                  onClick={() => setAddress("Hostel")}
                  className="block text-sm w-full text-left hover:bg-gray-100 rounded px-2 py-1"
                >
                  Hostel
                </button>
                <button
                  onClick={() => setAddress("Office")}
                  className="block text-sm w-full text-left hover:bg-gray-100 rounded px-2 py-1"
                >
                  Office
                </button>
                <button
                  onClick={() => setAddress("Home")}
                  className="block text-sm w-full text-left hover:bg-gray-100 rounded px-2 py-1"
                >
                  Home
                </button>
                <button
                  onClick={() => setAddress("Ug,hostle")}
                  className="block text-sm w-full text-left hover:bg-gray-100 rounded px-2 py-1"
                >
                  Ug,hostle
                </button>
              </div>
            </details>
          </div>
          <hr className="bg-black  mt-3 mb-3" />
          {/* To Section */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col">
              <label className="text-gray-400 text-sm">To</label>
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                  className="text-black text-sm font-semibold focus:outline-none"
                />

                <input
                  type="time"
                  value={toTime}
                  onChange={(e) => setToTime(e.target.value)}
                  className="text-black text-sm font-semibold focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Live Time and Search Button */}
          <div className="flex justify-between items-center mt-6 ">
            <div className="text-gray-600 text-sm">
              <span className="font-semibold">Live Time: </span>
              {liveTime}
            </div>
            <button className="bg-blue-600 py-4 px-6 rounded-tl-lg rounded-br-lg text-white  absolute bottom-0 right-0  hover:bg-blue-500">
              Search Ride
            </button>
          </div>
        </div>
        <div className="w-full max-w-screen-lg mt-8">
          <div className="flex justify-center">
            <img
              src="HomePageImage.png"
              alt="Large Visual"
              className="w-full rounded-lg shadow-lg object-cover -mb-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
