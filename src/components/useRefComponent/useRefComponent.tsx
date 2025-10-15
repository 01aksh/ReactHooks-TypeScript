/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useState } from "react";

const useRefComponent = () => {
  const [count, setcount] = useState(0);
  const [name] = useState<string>("");
  const timerRef = useRef<any>(null);
  const inputRef = useRef<any>(null);

  const handleStart = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setcount((prev) => prev + 1);
      }, 1000);
    }
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  const handleReset = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setcount(0);
  };

  const changeColor = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    inputRef.current.placeholder = "Enter Akshay";
  };

  return (
    <div className="text-center my-10 mask-l-from-2.5">
      <p className="my-2">Timer : {count}</p>
      <button
        onClick={handleStart}
        className="bg-green-700 cursor-help px-2 py-2 rounded text-yellow-100"
      >
        Start
      </button>{" "}
      <button
        onClick={handleStop}
        className="bg-red-600 px-2 py-2 rounded text-yellow-100"
      >
        Stop
      </button>{" "}
      <button
        onClick={handleReset}
        className="bg-blue-600 px-2 py-2 rounded text-yellow-100"
      >
        Reset
      </button>{" "}
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={() => {}}
        ref={inputRef}
        className="border mx-2 px-4"
      />
      <button
        onClick={changeColor}
        className="bg-yellow-600 px-2 py-2 mx-2 rounded text-yellow-100"
      >
        Change Color
      </button>
    </div>
  );
};

export default useRefComponent;
