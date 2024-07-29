"use client";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import SidebarHeader from "./SidebarHeader";
import Tags from "./Tags";
import Sections from "./Sections";
import { UserAndSections } from "@/app/dashboard/page";

export const Sidebar = ({
  sectionsData,
}: {
  sectionsData: UserAndSections;
}) => {
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
