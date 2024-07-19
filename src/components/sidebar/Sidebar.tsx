"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
import Tabs from "./Tabs";
import Collections from "./Collections";
import SidebarHeader from "./SidebarHeader";
import Tags from "./Tags";

const Sidebar = ({ placeholders, setCurrentSection }: any) => {
  return (
    <div className="grid grid-rows-[auto_1fr] h-screen border-r">
      <SidebarHeader />
      <Tabs
        collections={
          <Collections
            setCurrentSection={setCurrentSection}
            placeholders={placeholders}
          />
        }
        tags={<Tags />}
      />
    </div>
  );
};

export default Sidebar;
