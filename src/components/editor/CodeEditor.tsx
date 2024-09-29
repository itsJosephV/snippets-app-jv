"use client";
import useSnippetsContext from "@/context/useSnippetsContext";
import CodeMirror from "@uiw/react-codemirror";
import EditorHeader from "./EditorHeader";

const CodeEditor = () => {
  const { currentSnippet } = useSnippetsContext();
  return (
    <div className="grid grid-rows-[auto_49px_1fr] h-screen">
      <EditorHeader currentSnippet={currentSnippet} />
      <div className="border-b p-3">{currentSnippet.description}</div>
      <CodeMirror
        className="overflow-y-scroll"
        basicSetup={{ lineNumbers: true }}
        theme={"light"}
        value={currentSnippet.content}
        height="100%"
      />
    </div>
  );
};

export default CodeEditor;

const CODE_HEIGHT_TEST = `"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { SnippetsColumn } from "@/components/snippets-column/SnippetsColumn";
import { githubDark } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";

// import { Button } from "@/components/ui/button";
// import { signOut } from "next-auth/react";
import React, { useState } from "react";

const DashboardPage = () => {
  const [value, setValue] = useState("console.log('hello world!');");

  return (
    <div className="h-screen grid grid-cols-[320px_370px_1fr]">
      <Sidebar />
      <SnippetsColumn />
      <CodeMirror
        className="overflow-y-scroll"
        basicSetup={{ lineNumbers: true }}
        theme={"dark"}
        value={value}
        height="100%"
      />
    </div>
  );
};

export default DashboardPage;

"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { SnippetsColumn } from "@/components/snippets-column/SnippetsColumn";
import { githubDark } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";

// import { Button } from "@/components/ui/button";
// import { signOut } from "next-auth/react";
import React, { useState } from "react";

const DashboardPage = () => {
  const [value, setValue] = useState("console.log('hello world!');");

  return (
    <div className="h-screen grid grid-cols-[320px_370px_1fr]">
      <Sidebar />
      <SnippetsColumn />
      <CodeMirror
        className="overflow-y-scroll"
        basicSetup={{ lineNumbers: true }}
        theme={"dark"}
        value={value}
        height="100%"
      />
    </div>
  );
};

export default DashboardPage;


"use client";

import Sidebar from "@/components/sidebar/Sidebar";
import { SnippetsColumn } from "@/components/snippets-column/SnippetsColumn";
import { githubDark } from "@uiw/codemirror-theme-github";
import CodeMirror from "@uiw/react-codemirror";

// import { Button } from "@/components/ui/button";
// import { signOut } from "next-auth/react";
import React, { useState } from "react";

const DashboardPage = () => {
  const [value, setValue] = useState("console.log('hello world!');");

  return (
    <div className="h-screen grid grid-cols-[320px_370px_1fr]">
      <Sidebar />
      <SnippetsColumn />
      <CodeMirror
        className="overflow-y-scroll"
        basicSetup={{ lineNumbers: true }}
        theme={"dark"}
        value={value}
        height="100%"
      />
    </div>
  );
};

export default DashboardPage;

`;
