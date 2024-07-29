import { createSection } from "@/lib/actions";
import prisma from "@/lib/db";
// import { getServerSession } from "next-auth";
import React from "react";

function NewSectionForm() {
// { collectionId }: { collectionId: string }
  // const session = await getServerSession();
  // console.log(session);
  return (
    <form action={createSection}>
      <input name="section-name" type="text" placeholder="Section name" />
      {/* <input
        type="text"
        defaultValue={collectionId}
        hidden
        name="collection-id"
      /> */}
      <button>Create</button>
    </form>
  );
}

export default NewSectionForm;
