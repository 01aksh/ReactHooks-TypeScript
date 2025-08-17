import { type FormEvent, useReducer } from "react";

type State = {
  user: {
    firstName: string;
    lastName: string;
    age: number | "";
  };
  address: {
    city: string;
    country: string;
  };
  skills: string[];
};

type Action =
  | { type: "update_user"; field: keyof State["user"]; value: string }
  | { type: "update_address"; field: keyof State["address"]; value: string }
  | { type: "add_skill"; skill: string }
  | { type: "remove_skill"; index: number }
  | { type: "reset" };

const initialState: State = {
  user: {
    firstName: "",
    lastName: "",
    age: "",
  },
  address: {
    city: "",
    country: "",
  },
  skills: [],
};

function formReducer(state: State, action: Action): State {
  switch (action.type) {
    case "update_user":
      return {
        ...state,
        user: { ...state.user, [action.field]: action.value },
      };
    case "update_address":
      return {
        ...state,
        address: { ...state.address, [action.field]: action.value },
      };
    case "add_skill":
      return {
        ...state,
        skills: [...state.skills, action.skill],
      };
    case "remove_skill":
      return {
        ...state,
        skills: state.skills.filter((_, i) => i !== action.index),
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "update_user",
      field: name as keyof State["user"],
      value,
    });
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({
      type: "update_address",
      field: name as keyof State["address"],
      value,
    });
  };

  const handleAddSkill = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.namedItem("skill") as HTMLInputElement;
    if (input.value.trim()) {
      dispatch({ type: "add_skill", skill: input.value.trim() });
      input.value = "";
    }
  };

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-xl font-bold text-center">Profile Form</h2>

      {/* User section */}
      <div>
        <h3 className="font-semibold">User Info</h3>
        <input
          type="text"
          name="firstName"
          value={state.user.firstName}
          onChange={handleUserChange}
          placeholder="First Name"
          className="border rounded p-1 m-1"
        />
        <input
          type="text"
          name="lastName"
          value={state.user.lastName}
          onChange={handleUserChange}
          placeholder="Last Name"
          className="border rounded p-1 m-1"
        />
        <input
          type="number"
          name="age"
          value={state.user.age}
          onChange={handleUserChange}
          placeholder="Age"
          className="border rounded p-1 m-1"
        />
      </div>

      {/* Address section */}
      <div>
        <h3 className="font-semibold">Address</h3>
        <input
          type="text"
          name="city"
          value={state.address.city}
          onChange={handleAddressChange}
          placeholder="City"
          className="border rounded p-1 m-1"
        />
        <input
          type="text"
          name="country"
          value={state.address.country}
          onChange={handleAddressChange}
          placeholder="Country"
          className="border rounded p-1 m-1"
        />
      </div>

      {/* Skills section */}
      <div>
        <h3 className="font-semibold">Skills</h3>
        <form onSubmit={handleAddSkill}>
          <input
            type="text"
            name="skill"
            placeholder="Add a skill"
            className="border rounded p-1 m-1"
          />
          <button type="submit" className="border px-2 py-1 rounded">
            Add
          </button>
        </form>
        <ul>
          {state.skills.map((skill, i) => (
            <li key={i} className="flex items-center space-x-2">
              <span>{skill}</span>
              <button
                type="button"
                onClick={() => dispatch({ type: "remove_skill", index: i })}
                className="text-red-500"
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Reset */}
      <button
        type="button"
        onClick={() => dispatch({ type: "reset" })}
        className="border px-2 py-1 rounded bg-gray-200"
      >
        Reset Form
      </button>

      {/* Debug preview */}
      <pre className="bg-gray-100 p-2 rounded">
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  );
};

export default Form;
