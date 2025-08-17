import { useEffect, useState } from "react";

const Debouncing = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (name.trim()) {
      const timer = setTimeout(() => {
        console.log("Calling API Via Debounce......");
      }, 700);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [name]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="my-2">
      <p className="my-2 text-center underline">
        Bebouncing , Throttling , AbortController, Clean-Up Functions, Loading &
        error states{" "}
      </p>
      <div>
        <label>Name : </label>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={handleInputChange}
          className="border-1 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Debouncing;
