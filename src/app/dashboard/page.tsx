import CodeEditor from "@/components/editor/CodeEditor";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Snippets } from "@/components/snippets/Snippets";
import { getCurrentUserSections } from "@/lib/data";
import { getServerSession } from "next-auth";
import { type Section } from "@/store/snippetsStore";

export type UserAndSections = {
  name: string;
  email: string;
  id: string;
  sections: Section[];
};

const DashboardPage = async () => {
  const session = await getServerSession();
  const sectionsData = (await getCurrentUserSections(
    session?.user.email
  )) as UserAndSections;

  return (
    <div className="h-screen grid grid-cols-[300px_350px_1fr]">
      <Sidebar sectionsData={sectionsData} />
      <Snippets />
      <CodeEditor />
    </div>
  );
};

export default DashboardPage;
