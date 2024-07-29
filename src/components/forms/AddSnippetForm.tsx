import React from "react";

// model Snippet {
//   id          String     @id @default(uuid())
//   title       String
//   content     String
//   syntax      String
//   folderId    String
//   folder      Folder     @relation(fields: [folderId], references: [id])
//   favoritedBy Favorite[]
// }

const AddSnippetForm = () => {
  return (
    <form action="" className="flex flex-col gap-1">
      <input type="text" name="snippet-title" placeholder="add title" />
      <input type="text" name="snippet-syntax" placeholder="add syntax" />
      <button className="bg-green-300 mt-2 py-1 px-3 rounded-md">
        Add snippet
      </button>
    </form>
  );
};

export default AddSnippetForm;
