import { useState } from "react";

const AdvancedConcepts = () => {
  const [count, setCount] = useState(0);

  /* 
      3). Batching State Updates 👉 ( Check for more details in onepluspolicedaddy@gmail.com CHATGPT )
         React automatically batches multiple setState calls together into one re-render.
    
    
         👉 Before React 18 (React 17 and earlier)
         Batching = React combines multiple state updates into one re-render, but only inside React event handlers.
         If you updated state inside a timeout, promise, or async callback, batching did not happen — React re-rendered after each update.
    
         👉 React 18 – Automatic Batching Everywhere
         Now React batches all state updates, even if they happen inside async code, promises, timeouts, fetches, or event handlers.
    
        This means fewer re-renders and better performance — you don’t have to manually wrap things in unstable_batchedUpdates.
      */

  const handleIncreamnet = () => {
    setCount((prevCount) => {
      console.log(prevCount + 1);
      return prevCount + 1;
    });
  };

  /**
     * The function `delayedIncreamentStaleClouser` uses a setTimeout to increment the count state after a
     * delay of 2 seconds.
     * 
     * 4). Stale Closures 👉
        When you capture an old version of state inside a closure (e.g., inside a setTimeout), it can cause bugs.
     */
  const delayedIncreamentStaleClouser = () => {
    setTimeout(() => {
      setCount((prevcount) => prevcount + 1);
    }, 2000);
  };
  return (
    /* The code snippet you provided is a functional component in TypeScript React that utilizes the
   `useState` hook. Here's a breakdown of what it does:
   1). Reconciliation 👉 Reconciliation is how React updates the UI efficiently when your component’s state or props change. 


   More technically:
   When you call setState, React does not reload the entire page or re-render everything blindly.
   Instead, it compares the new virtual DOM tree with the previous one, finds the differences, and only updates the changed parts in the real DOM.

   This smart comparison process is called reconciliation.

   How React does reconciliation:

   Render phase:
   React builds a new virtual DOM tree based on your latest state/props.

   Diffing algorithm:
   It compares the new tree with the old one using a fast algorithm (called the diffing algorithm).

   Commit phase:
   React updates only the changed parts of the real DOM.
   */

    <div className="my-4 px-6 text-center">
      <h1 className="text-center font-normal underline">
        Advanced Concepts(Stale Closure, Reconciliation,Batching )
      </h1>
      <div className="my-6">
        <h1>Count : {count}</h1>
        <button
          className="bg-red-300 px-2 py-2 text-white rounded-lg"
          onClick={handleIncreamnet}
        >
          Increment
        </button>
        <button
          className="bg-yellow-200 mx-2 px-2 py-2 rounded-lg"
          onClick={delayedIncreamentStaleClouser}
        >
          Stale Closure
        </button>
      </div>
    </div>

    /*
    When you click a button to setCount(1):
    It diffs old <h1>Count: 0</h1> with new <h1>Count: 1</h1>.
    It sees only the text content changed, not the whole <h1> tag.    
    So it only updates the text node inside the <h1>, not the entire element.
    That's fast and efficient.
    
    Key points to remember for interviews:    
    Reconciliation uses virtual DOM diffing.    
    React assumes elements of the same type (like two <h1> tags) can be compared.
    Keys help React during reconciliation when working with lists (map) — to match elements correctly and avoid unnecessary re-renders.
    React batches updates for performance.
    React re-renders the component (virtual DOM says: <h1>Count: 1</h1>).
    
    */
  );
};

export default AdvancedConcepts;
