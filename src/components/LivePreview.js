import React, { useState } from "react";

const LivePreview = ({ code }) => {
  const [output, setOutput] = useState("");

  const runCode = () => {
    try {
      const execute = new Function(code); // Instead of eval()
      setOutput(execute());
    } catch (error) {
      setOutput("Error: " + error.message);
    }
  };

  return (
    <div>
      <button onClick={runCode}>Run Code</button>
      <pre>{output}</pre>
    </div>
  );
};

export default LivePreview;