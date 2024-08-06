import { createFolder } from "@/lib/actions";
import React from "react";
import SubmitButton from "../ui/submit-buttons/SubmitButton";

function NewFolderForm({ sectionId }: { sectionId: string }) {
  return (
    <form action={createFolder}>
      <input name="folder-name" type="text" placeholder="folder name" />
      <input type="text" defaultValue={sectionId} hidden name="section-id" />
      <SubmitButton />
    </form>
  );
}

export default NewFolderForm;
