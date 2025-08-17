const ContextComponent = () => {
  return (
    <div className="my-2 text-center">
      <p className="my-2 font-semibold underline">Use Context API</p>
      <p className="my-2 text-start">
        🔹 Levels of useContext Usage Beginner (Theme Example ✅)------- Context
        stores simple state (like "light" | "dark"). Useful for theming,
        language, basic toggles.
      </p>
      <p className="my-2 text-start">
        🔹 Intermediate------ Context stores objects with multiple values &
        functions. Example: Auth context → (user, login, logout).
      </p>
      <p className="my-2 text-start">
        🔹 Advanced (useContext + useReducer) -------- Context stores a state +
        dispatch pair. Lets you manage complex global state (mini-Redux).
        Example: Cart context → state: cartItems[], dispatch .
      </p>
    </div>
  );
};

export default ContextComponent;

/* 
🔹 Levels of useContext Usage

Beginner (Theme Example ✅)-------

Context stores simple state (like "light" | "dark").

Useful for theming, language, basic toggles.

Intermediate------

Context stores objects with multiple values & functions.

Example: Auth context → { user, login, logout }.

Advanced (useContext + useReducer) --------

Context stores a state + dispatch pair.

Lets you manage complex global state (mini-Redux).

Example: Cart context → { state: cartItems[], dispatch }.

*/
