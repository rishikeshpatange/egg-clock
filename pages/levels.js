import { useRouter } from "next/router";

const levels = [
  { name: "Soft Boiled", time: 3 },
  { name: "Medium Boiled", time: 6 },
  { name: "Hard Boiled", time: 9 },
  { name: "Very Hard", time: 12 },
];

export default function Levels() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-100">
      <h1 className="text-3xl font-bold mb-6">Choose Your Egg Level 🍳</h1>
      <div className="grid grid-cols-2 gap-4">
        {levels.map((level) => (
          <button
            key={level.name}
            onClick={() => router.push(`/timer?time=${level.time}`)}
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            {level.name} - {level.time} min
          </button>
        ))}
      </div>
    </div>
  );
}
