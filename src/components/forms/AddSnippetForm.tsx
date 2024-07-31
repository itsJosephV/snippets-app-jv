import { addNewSnippet } from "@/lib/actions";
import { Snippet, useSnippetsStore } from "@/store/snippetsStore";
import { useRouter } from "next/navigation";
// import prisma from "@/lib/db";
// import { useSnippetsStore } from "@/store/snippetsStore";

const AddSnippetForm = ({ folderId }: { folderId: string }) => {
  const router = useRouter();
  const setFolder = useSnippetsStore((state) => state.setCurrentFolder);
  const current = useSnippetsStore((state) => state.currentFolder);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const snippetData = {
      title: formData.get("snippet-title"),
      syntax: formData.get("snippet-syntax"),
      content: `const hello = console.log("hello")`,
      folderId,
    };

    try {
      const response = await fetch("/api/snippet/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(snippetData),
      });

      if (!response.ok) {
        throw new Error("Failed to create snippet");
      }

      const newSnippet: Snippet = await response.json();
      console.log(newSnippet);
      const folder = {
        ...current,
        snippets: [...current.snippets, newSnippet],
      };
      setFolder(folder);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <form
    //   action={() => {
    //     addNewSnippet;
    //   }}
    //   className="flex flex-col gap-1"
    // >
    <form onSubmit={onSubmit} className="flex flex-col gap-1">
      <input type="text" name="snippet-title" placeholder="add title" />
      <input type="text" name="snippet-syntax" placeholder="add syntax" />
      {/* <input type="text" hidden defaultValue={folderId} name="folder-id" /> */}
      <button
        // onClick={() => setFolder([])}
        className="bg-green-300 mt-2 py-1 px-3 rounded-md"
      >
        Add snippet
      </button>
    </form>
  );
};

export default AddSnippetForm;
