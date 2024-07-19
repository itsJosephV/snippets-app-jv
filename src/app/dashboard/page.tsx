"use client";
import CodeEditor from "@/components/editor/CodeEditor";
import Sidebar from "@/components/sidebar/Sidebar";
import { Snippets } from "@/components/snippets/Snippets";
import { COLLECTIONS_PLACEHOLDER } from "@/lib/placeholders";
import React, { useState } from "react";

const DashboardPage = () => {
  const [currentSection, setCurrentSection] = useState(null);
  const [currentSnippet, setCurrentSnippet] = useState(null);
  // console.log(currentSection);
  // console.log(currentSnippet);

  return (
    <div className="h-screen grid grid-cols-[300px_350px_1fr]">
      <Sidebar
        setCurrentSection={setCurrentSection}
        placeholders={COLLECTIONS_PLACEHOLDER}
      />
      <Snippets
        currentSection={currentSection}
        setCurrentSnippet={setCurrentSnippet}
      />
      <CodeEditor currentSnippet={currentSnippet} />
    </div>
  );
};

export default DashboardPage;
