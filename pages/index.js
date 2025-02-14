import { useRouter } from "next/router";
import { Minus, X } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-center bg-white p-3">
      <div className="w-96 h-96 shadow-lg flex flex-col items-center rounded-md background">
        {/* Header */}
        <div className="w-full flex justify-between items-center px-3 py-2 rounded-tl-md rounded-tr-md">
          <h2 >Egg Timer</h2>
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
            <h1 className="mt-6">
              Let's time <br />  your egg! 
            </h1>

            <button
              onClick={() => router.push("/levels")}
              className="px-10 py-1 mt-6 button"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
