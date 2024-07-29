import CodeEditor from "@/components/editor/CodeEditor";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Snippets } from "@/components/snippets/Snippets";
import { getCollections } from "@/lib/data";

const DashboardPage = async () => {
  const collectionsData = await getCollections();

  return (
    <div className="h-screen grid grid-cols-[300px_350px_1fr]">
      <Sidebar collectionsData={collectionsData} />
      <Snippets />
      <CodeEditor />
    </div>
  );
};

export default DashboardPage;
