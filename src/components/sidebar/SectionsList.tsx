"use server";
import { getSections } from "@/lib/data/getSections";
import { Section } from "@/types";
import React from "react";
import SectionItem from "./SectionItem";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const SectionsList = async () => {
  const session = await getServerSession(authOptions);
  const data = await getSections(session?.user.id);
  return data?.map((section) => {
    return (
      <li key={section.id} className="cursor-pointer">
        <SectionItem section={section as Section} />
      </li>
    );
  });
};

export default SectionsList;
