import Tabs from "./Tabs";
import SidebarHeader from "./SidebarHeader";
import Tags from "./Tags";
import Sections from "./Sections";

export const Sidebar = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen border-r">
      <SidebarHeader />
      <Tabs sections={<Sections />} tags={<Tags />} />
    </div>
  );
};
