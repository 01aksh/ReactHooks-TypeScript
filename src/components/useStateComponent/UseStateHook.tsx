import AdvancedConcepts from "./AdvancedConcepts";
import FormUpdate from "./FormUpdate";

const UseStateHook = () => {
  return (
    <div className="my-1 px-6">
      <p className="text-center font-medium text-lg">UseStateHook</p>
      <AdvancedConcepts />
      <div>
        <FormUpdate />
      </div>
    </div>
  );
};

export default UseStateHook;
