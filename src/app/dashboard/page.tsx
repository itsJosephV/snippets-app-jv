"use server";
import CodeEditor from "@/components/editor/CodeEditor";
import { SnippetsColumn } from "@/components/snippets/SnippetsColumn";
import { Sidebar } from "@/components/sidebar/Sidebar";

type Props = {
  searchParams: {
    folderId: string;
  };
};

const DashboardPage = async ({ searchParams: { folderId } }: Props) => {
  return (
    <div className="h-screen grid grid-cols-[300px_350px_1fr]">
      <Sidebar />
      <SnippetsColumn folderId={folderId} />
      <CodeEditor />
    </div>
  );
};

export default DashboardPage;
