"use server";
import CodeEditor from "@/components/editor/CodeEditor";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { Snippets } from "@/components/snippets/Snippets";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getServerSession } from "next-auth";
import { unstable_noStore } from "next/cache";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getSections } from "@/lib/data/getSections";

const DashboardPage = async () => {
  unstable_noStore();
  const session = await getServerSession(authOptions);

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["sections"],
    queryFn: () => getSections(session?.user.id),
  });

  return (
    <div className="h-screen grid grid-cols-[300px_350px_1fr]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Sidebar />
        <Snippets />
        <CodeEditor />
      </HydrationBoundary>
    </div>
  );
};

export default DashboardPage;
