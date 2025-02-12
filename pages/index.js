import { useRouter } from "next/router";
import { Minus, X } from "lucide-react";

export default function Home() {
  const router = useRouter();
  return (
    <div className="h-screen flex items-center justify-center  bg-white">
      <div className="w-96 h-96 bg-yellow-200 text-red-400  shadow-lg flex flex-col items-center rounded-md">
        <div className="w-full flex justify-between items-center  px-3 py-2   rounded-tl-md rounded-tr-md  ">
          <span className="text-lg text-red-400 font-medium ">Egg Timer</span>
          <div className="flex gap-2">
            <div className="w-6 h-6 flex items-center justify-center bg-yellow-500 border border-red-600 rounded-sm">
              <Minus className="w-4 h-4 text-red-600" />
            </div>
            <div className="w-6 h-6  flex items-center justify-center bg-red-500 border border-yellow-500 rounded-sm">
              <X className="w-4 h-4 text-yellow-500" />
            </div>
          </div>
          
        </div>
        <div className="w-full h-full p-2">
          <div className="flex items-center flex-col justify-center w-full h-full border border-yellow-400 rounded">
            <h1 className="text-xl font-medium mt-6 text-gray-800 ">
              Let's time your egg! 🥚
            </h1>
            <button
              onClick={() => router.push("/levels")}
              className="px-10 py-1 mt-5 bg-yellow-500 text-white font-semibold rounded-md shadow-lg hover:bg-yellow-600 transition"
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
