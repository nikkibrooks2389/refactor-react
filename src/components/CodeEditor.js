import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { initialCode } from "../challanges/exampleChallenge";
import LivePreview from "../components/LivePreview";
import Hints from "../components/Hints";
import { validateCode } from "../utils/validator";

const CodeEditor = () => {
  const [code, setCode] = useState(initialCode);
  const [isCorrect, setIsCorrect] = useState(null);

  const checkAnswer = () => {
    setIsCorrect(validateCode(code));
  };

  return (
    <div>
      <h1>Refactor React</h1>
      <Editor
        height="300px"
        defaultLanguage="javascript"
        value={code}
        onChange={(newValue) => setCode(newValue)}
        theme="vs-dark"
      />
      <button onClick={checkAnswer}>Check Answer</button>
      {isCorrect !== null && (
        <p>{isCorrect ? "✅ Correct!" : "❌ Try Again!"}</p>
      )}
      <LivePreview code={code} />
      <Hints />
    </div>
  );
};

export default CodeEditor;