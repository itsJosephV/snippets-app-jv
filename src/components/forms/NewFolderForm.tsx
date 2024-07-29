import { createFolder, createSection } from "@/lib/actions";
import prisma from "@/lib/db";
// import { getServerSession } from "next-auth";
import React from "react";

function NewFolderForm({ sectionId }: { sectionId: string }) {
  // const session = await getServerSession();
  // console.log(session);
  return (
    <form action={createFolder}>
      <input name="folder-name" type="text" placeholder="folder name" />
      <input type="text" defaultValue={sectionId} hidden name="section-id" />
      <button>Create</button>
    </form>
  );
}

export default NewFolderForm;
