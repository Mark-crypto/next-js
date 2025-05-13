"use client";

import { useState } from "react";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col items-center w-[100px]">
      <h5>CounterPage</h5>
      <button
        onClick={() => setCounter(counter + 1)}
        className="bg-blue-500 rounded text-white px-4 py-2 mt-4"
      >
        Add 1
      </button>
      <p className="text-5xl font-bold">{counter}</p>
      <button
        onClick={() => setCounter(counter - 1)}
        className="bg-blue-500 rounded text-white px-4 py-2 mt-4"
      >
        Subtract 1
      </button>
    </div>
  );
};
export default CounterPage;
