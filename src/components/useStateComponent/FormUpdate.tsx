import { useState } from "react";

type Gender = "male" | "female" | "other";
const GENDER_OPTIONS: Gender[] = ["male", "female", "other"];

type Role = "admin" | "user" | "guest";
const ROLE_OPTIONS: Role[] = ["admin", "user", "guest"];

type FormData = {
  name: string;
  age: number | "";
  gender: "male" | "female" | "other" | "";
  isSubscribed: boolean;
  role: "admin" | "user" | "guest" | "";
};

const FormUpdate = () => {
  const [formDetails, setformDetails] = useState<FormData>({
    name: "",
    age: "",
    isSubscribed: false,
    gender: "",
    role: "",
  });

  const handleFormDataChange = <K extends keyof FormData>(
    name: K,
    value: FormData[K]
  ) => {
    setformDetails({ ...formDetails, [name]: value });
  };

  return (
    <>
      <div>
        <h1 className="text-center font-normal underline">
          Form Updates for Arrays and Objects in useState(TypeScript)
        </h1>
        <div className="max-w-lg mx-auto p-6 bg-white my-6 rounded-xl shadow-md space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={formDetails.name}
            onChange={(e) => handleFormDataChange("name", e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="number"
            placeholder="Enter Your Age"
            value={formDetails.age}
            onChange={(e) =>
              handleFormDataChange(
                "age",
                e.target.value ? Number(e.target.value) : ""
              )
            }
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
          <div>
            <input
              id="subscribe"
              type="checkbox"
              checked={formDetails.isSubscribed}
              onChange={(e) =>
                handleFormDataChange("isSubscribed", e.target.checked)
              }
              className="w-4 h-4 accent-blue-500"
            />
            <label htmlFor="subscribe" className="mx-2">
              Subscribe to newsletter
            </label>
          </div>
          <div>
            <p className="mb-2 font-medium">Select Gender</p>
            <div className="flex gap-4">
              {GENDER_OPTIONS.map((option) => (
                <label key={option} className="flex items-center gap-1">
                  <input
                    type="radio"
                    value={option}
                    name="gender"
                    checked={formDetails.gender === option}
                    onChange={(e) =>
                      handleFormDataChange("gender", e.target.value as Gender)
                    }
                  />
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </label>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 font-medium">Admin Roles</p>
            <select
              value={formDetails.role}
              onChange={(e) =>
                handleFormDataChange("role", e.target.value as Role)
              }
              className="border border-gray-300 rounded-md p-2"
            >
              <option value="">Select Role</option>

              {ROLE_OPTIONS.map((r) => (
                <option key={r} value={r}>
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormUpdate;
