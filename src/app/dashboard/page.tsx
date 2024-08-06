import CodeEditor from "@/components/editor/CodeEditor";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Snippets } from "@/components/snippets/Snippets";
import { getServerSession } from "next-auth";
import { type Section } from "@/store/snippetsStore";
import { unstable_noStore } from "next/cache";
import { getFolders } from "@/lib/data/getFolders";

const DashboardPage = async () => {
  unstable_noStore();
  const session = await getServerSession();
  const sectionsData: Section[] = await getFolders(session?.user.id);
  console.log(sectionsData);
  return (
    <div className="h-screen grid grid-cols-[300px_350px_1fr]">
      <Sidebar sectionsData={sectionsData} />
      <Snippets />
      <CodeEditor />
    </div>
  );
};

export default DashboardPage;
