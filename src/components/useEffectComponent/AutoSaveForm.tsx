/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const AutoSaveForm = () => {
  const [content, setContent] = useState<string>("");
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<string>("");
  useEffect(() => {
    if (!content) {
      return;
    }

    const controller = new AbortController();
    const signal = controller.signal;

    setStatus("saving");
    setError("");

    const timer = setTimeout(async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify({
            title: "Draft Title",
            body: content,
            userId: 1,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          signal,
        });
        setStatus("saved");
        const data = await res.json();
        console.log(data);
      } catch (err: any) {
        console.log(err);

        if (err.name === "AbortError") {
          console.log("⛔ Save aborted");
        } else {
          console.error(err);
          setStatus("error");
          setError(err.message);
        }
      }
    }, 700);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [content]);
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>📝 Auto-Save Blog Draft</h2>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing your blog post..."
        rows={6}
        style={{ width: "100%", padding: "10px" }}
      />
      <div style={{ marginTop: "10px" }}>
        {status === "saving" && <span>💾 Saving...</span>}
        {status === "saved" && (
          <span style={{ color: "green" }}>✅ Draft saved!</span>
        )}
        {status === "error" && <span style={{ color: "red" }}>❌ {error}</span>}
        {status === "idle" && <span>Start typing...</span>}
      </div>
    </div>
  );
};

export default AutoSaveForm;
