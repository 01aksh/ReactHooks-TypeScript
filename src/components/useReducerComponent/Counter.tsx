import { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: string;
};

const initialState: State = {
  count: 0,
};

function countReducer(state: State, action: Action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <div className="my-4">
      Counter : {state.count}
      <div className="space-x-2">
        <button
          onClick={() =>
            dispatch({
              type: "increment",
            })
          }
          className="bg-red-300 px-2 py-2 rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "decrement",
            })
          }
          className="bg-green-300 px-2 py-2 rounded-lg"
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatch({
              type: "reset",
            })
          }
          className="bg-blue-300 px-2 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
