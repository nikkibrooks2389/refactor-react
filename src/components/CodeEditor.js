import React from "react";
import Editor from "@monaco-editor/react";

const CodeEditor = () => {
  return (
    <Editor
      height="300px"
      defaultLanguage="javascript"
      defaultValue="// Refactor this code..."
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
