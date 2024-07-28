import { createCollection } from "@/lib/actions";
import prisma from "@/lib/db";
// import { getServerSession } from "next-auth";
import React from "react";

function NewCollectionForm() {
  // const session = await getServerSession();
  // console.log(session);
  return (
    <form action={createCollection}>
      <input name="collection-name" type="text" placeholder="Collection name" />
      <button>Create</button>
    </form>
  );
}

export default NewCollectionForm;
