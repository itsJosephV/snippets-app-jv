"use client";

import { createSnippet } from "@/lib/actions";
import SubmitButton from "../ui/submit-buttons/SubmitButton";

const AddSnippetForm = ({ folderId }: { folderId: string }) => {
  const createSnippetWithId = createSnippet.bind(null, folderId);
  return (
    <form action={createSnippetWithId} className="flex flex-col gap-1">
      <input type="text" name="snippet-title" placeholder="add title" />
      <input type="text" name="snippet-syntax" placeholder="add syntax" />
      <textarea
        id="snippet-description"
        name="snippet-description"
        placeholder="add description"
      ></textarea>
      {/* <button className="bg-green-300 mt-2 py-1 px-3 rounded-md">
        Add snippet
      </button> */}
      <SubmitButton />
    </form>
  );
};

export default AddSnippetForm;
