import { useRouter } from "next/router";
import { Minus, X } from "lucide-react";

const levels = [
  { name: "Soft Boiled", time: 3, image: "/Images/egg.png" },
  { name: "Medium Boiled", time: 6, image: "/Images/egg.png" },
  { name: "Hard Boiled", time: 9, image: "/Images/egg.png" },
  { name: "Very Hard", time: 12, image: "/Images/egg.png" },
];

export default function Levels() {
  const router = useRouter();

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
          <div className="relative z-10 flex flex-col items-center justify-center text-white w-full h-full">
            <h3 className="mb-3 text-2xl ">
              What are we making today?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {levels.map((level) => (
                <button
                  key={level.name}
                  onClick={() => router.push(`/timer?time=${level.time}`)}
                  className="px-6   flex flex-col items-center"
                >
                  <img
                    src={level.image}
                    alt={level.name}
                    className="w-14 h-17  transition-transform duration-300 hover:scale-[1.11]"
                  />
                  <h3> {level.name}</h3>
                 
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
