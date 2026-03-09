/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo, useState } from "react";

const generateLargeList = () => {
  const data: string[] = [];

  for (let i = 1; i <= 10000; i++) {
    data.push(`Item ${i}`);
  }

  return data;
};

const UseMemoComponent = () => {
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  const list = useMemo(() => generateLargeList(), []);

  const filteredList = useMemo(() => {
    console.log("🔍 Filtering list...");
    return list.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, list]);

  return (
    <div className="text-center my-10">
      <h2 className="text-cyan-600">useMemo - Large List Optimization</h2>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setCount((c) => c + 1)}>
        Re-render Counter: {count}
      </button>

      <p>Showing {filteredList.length} results</p>

      <ul>
        {filteredList?.slice(0, 20)?.map((item: any) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemoComponent;
