import { createCollection } from "@/actions/actions";
import prisma from "@/lib/db";
import React from "react";

const NewCollectionForm = () => {
  return (
    <form
      action={async (formData) => {
        createCollection(formData);
      }}
    >
      <input name="collection-name" type="text" placeholder="Collection name" />
      <button>Create</button>
    </form>
  );
};

export default NewCollectionForm;
