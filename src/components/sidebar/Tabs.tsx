"use client";
import React, { ReactNode } from "react";
import * as RTabs from "@radix-ui/react-tabs";

type TabsProps = {
  collections: ReactNode;
  tags: ReactNode;
};

const Tabs = ({ collections, tags }: TabsProps) => {
  return (
    <RTabs.Root
      className="flex flex-col h-full overflow-hidden"
      defaultValue="tab-1"
    >
      <RTabs.List className="flex p-2 border-b gap-2">
        <RTabs.Trigger
          className="basis-full text-center bg-orange-100 p-1 rounded-md"
          value="tab-1"
        >
          Collections
        </RTabs.Trigger>
        <RTabs.Trigger
          className="basis-full text-center bg-pink-100 p-1 rounded-md"
          value="tab-2"
        >
          Tags
        </RTabs.Trigger>
      </RTabs.List>
      <RTabs.Content className="h-full overflow-y-scroll" value="tab-1">
        {collections}
      </RTabs.Content>
      <RTabs.Content className="h-full overflow-y-scroll" value="tab-2">
        {tags}
      </RTabs.Content>
    </RTabs.Root>
  );
};

export default Tabs;
