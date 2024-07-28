// "use client";
import CodeEditor from "@/components/editor/CodeEditor";
import Sidebar from "@/components/sidebar/Sidebar";
import { Snippets } from "@/components/snippets/Snippets";
import { COLLECTIONS_PLACEHOLDER } from "@/lib/placeholders";
import React, { useState } from "react";
import { type Sections } from "@/types";
import { type SingleSnippet } from "@/types";
import { authOptions, GET } from "../api/auth/[...nextauth]/route";
import { getSession, useSession } from "next-auth/react";
import { getServerSession } from "next-auth";
import NextAuth from "next-auth/next";
import { getCollections } from "@/lib/data";

const DEFAULT_SNIPPET = {
  id: "",
  title: "",
  content: "",
  syntax: "",
  sectionId: "",
};

const DashboardPage = async () => {
  // const [currentSection, setCurrentSection] = useState<Sections[]>([]);
  // const [currentSnippet, setCurrentSnippet] =
  //   useState<SingleSnippet>(DEFAULT_SNIPPET);
  // console.log(currentSection);
  // console.log(currentSnippet);

  const collectionsData = await getCollections();

  // const session = await getServerSession(authOptions);
  // collectionsData?.collection.map((section) =>
  //   section.sections.map((folder) => console.log(folder.folders))
  // );

  return (
    <div className="h-screen grid grid-cols-[300px_350px_1fr]">
      <Sidebar
        // setCurrentSection={setCurrentSection}
        collectionsData={collectionsData}
      />
      <Snippets
      // currentSection={currentSection}
      // setCurrentSnippet={setCurrentSnippet}
      />
      <CodeEditor
      //  currentSnippet={currentSnippet}
      />
    </div>
  );
};

export default DashboardPage;
