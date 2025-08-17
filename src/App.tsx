import ContextComponent from "@components/ContextComponent/ContextComponent";
import { ThemeButton } from "@components/ThemeButton";
import UseEffectHook from "@components/useEffectComponent/UseEffectHook";
import UseReducerHook from "@components/useReducerComponent/UseReducerHook";
import UseStateHook from "@components/useStateComponent/UseStateHook";
import { useState } from "react";
import "./App.css";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { theme } = useTheme();

  const menuItems = [
    { label: "useState", component: <UseStateHook /> },
    { label: "useEffect", component: <UseEffectHook /> },
    { label: "useReducer", component: <UseReducerHook /> },
    { label: "useRef", component: <UseReducerHook /> },
    { label: "useCallBack", component: <UseReducerHook /> },
    { label: "useMemo", component: <UseReducerHook /> },
    { label: "useContext", component: <ContextComponent /> },
  ];

  return (
    <div className={`${theme === "light" ? "bg-white text-black" : "bg-black text-white"} min-h-screen`}>
      <p className="bg-red-400 text-center py-4 text-2xl font-semibold font-mono text-amber-200">
        React <ThemeButton />
      </p>

      <nav className="bg-gray-100 py-2 rounded-b-lg font-mono">
        <ul className="flex justify-around">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`px-2 cursor-pointer hover:text-amber-500 hover:underline text-black ${
                currentIndex === index ? "text-amber-500" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </nav>

      <div>{menuItems[currentIndex].component}</div>
    </div>
  );
}

export default App;
