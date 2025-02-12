import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
    <div className="h-screen flex flex-col items-center justify-center bg-yellow-100">
      {seconds > 0 ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Your egg is cooking... 🍳</h1>
          <p className="text-5xl font-bold">{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</p>
        </>
      ) : (
        <>
          <h1 className="text-3xl font-bold mb-6">Your egg is ready! 🥚</h1>
          <button
            onClick={() => router.push('/')}
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition"
          >
            Cook Again
          </button>
        </>
      )}
    </div>
  );
}
