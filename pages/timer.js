import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Minus, X } from "lucide-react";

export default function Timer() {
  const router = useRouter();
  const { time } = router.query;
  const initialTime = time ? parseInt(time) * 60 : 0; // Convert minutes to seconds
  const [seconds, setSeconds] = useState(initialTime);

  useEffect(() => {
    if (seconds <= 0) return;
    const timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="h-screen flex items-center justify-center bg-white">
    <div className="w-96 h-96 shadow-lg flex flex-col items-center rounded-md background">
      {/* Header */}
      <div className="w-full flex justify-between items-center px-3 py-2 rounded-tl-md rounded-tr-md">
        <h2>Egg Timer</h2>
        <div className="flex gap-2">
          <div className="w-6 h-6 flex items-center justify-center bg-yellow-500 border border-red-600 rounded-sm">
            <Minus className="w-4 h-4 text-red-600" />
          </div>
          <div className="w-6 h-6 flex items-center justify-center bg-red-500 border border-yellow-500 rounded-sm">
            <X className="w-4 h-4 text-yellow-500" />
          </div>
        </div>
      </div>
      
      {/* Content Container */}
      <div className="w-full h-full p-4 relative   overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 m-2 bg-[url('/Images/background.png')] bg-cover bg-center  z-0 background_image"></div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <div className="h-screen flex flex-col items-center justify-center ">
              {seconds > 0 ? (
                <>
                  <h3 className=" text-2xl mb-6">
                    Your egg is ready in...
                  </h3>
                  <p className="clock ">
                    {Math.floor(seconds / 60)}:
                    {String(seconds % 60).padStart(2, "0")}
                  </p>
                </>
              ) : (
                <>
                  <h1 className=" text-2xl mb-6">
                    Your egg is ready! 
                  </h1>
                  <button
                    onClick={() => router.push("/")}
                    className="px-10 py-1 mt-6 button"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
