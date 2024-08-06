import { deleteSection } from "@/lib/actions";
import React from "react";

const DeleteSectionForm = ({ sectionId }: { sectionId: string }) => {
  return (
    <form action={deleteSection.bind(null, sectionId)}>
      <input type="text" hidden defaultValue={sectionId} name="section-id" />
      <button className="bg-red-400 p-1 px-2 text-sm text-white rounded-md">
        Delete
      </button>
    </form>
  );
};

export default DeleteSectionForm;
