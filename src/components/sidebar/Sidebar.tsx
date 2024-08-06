import Tabs from "./Tabs";
import SidebarHeader from "./SidebarHeader";
import Tags from "./Tags";
import Sections from "./Sections";
import { Section } from "@/store/snippetsStore";

export const Sidebar = ({ sectionsData }: { sectionsData: Section[] }) => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen border-r">
      <SidebarHeader />
      <Tabs
        sections={<Sections sectionsData={sectionsData} />}
        tags={<Tags />}
      />
    </div>
  );
};
