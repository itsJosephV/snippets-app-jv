"use client";
import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
// import { githubDark } from "@uiw/codemirror-theme-github";

const CodeEditor = ({ currentSnippet }: any) => {
  console.log();
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen">
      <div className="bg-blue-50 p-2 border-b flex items-center h-16">
        <div className="flex-1 flex  flex-col">
          <p>{currentSnippet?.title}</p>
          <small>{currentSnippet?.syntax}</small>
          {/**TODO: TAGS HERE */}
        </div>
        <div className="flex items-center gap-2">
          <i>1</i>
          <i>2</i>
          <i>3</i>
          <i>4</i>
        </div>
      </div>
      <CodeMirror
        className="overflow-y-scroll"
        basicSetup={{ lineNumbers: true }}
        theme={"light"}
        value={currentSnippet?.content as string}
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
