import { deleteCollection } from "@/lib/actions";
import React from "react";

const DeleteCollectionForm = ({ collectionId }: { collectionId: string }) => {
  return (
    <form action={deleteCollection}>
      <input
        type="text"
        hidden
        defaultValue={collectionId}
        name="collection-id"
      />
      <button className="bg-red-400 p-1 px-2 text-sm text-white rounded-md">
        Delete
      </button>
    </form>
  );
};

export default DeleteCollectionForm;
