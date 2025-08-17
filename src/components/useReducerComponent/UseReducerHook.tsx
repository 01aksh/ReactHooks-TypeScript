import Counter from "./Counter";
import Form from "./Form";

const useReducerHook = () => {
  return (
    <div className="text-center my-6">
      <p>useReducerHook</p>
      <div>
        <Counter />
        <Form />
      </div>
    </div>
  );
};

export default useReducerHook;
