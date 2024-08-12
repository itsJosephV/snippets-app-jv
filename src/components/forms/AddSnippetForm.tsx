import { Snippet, useSnippetsStore } from "@/store/snippetsStore";
import { useQueryClient } from "@tanstack/react-query";

const AddSnippetForm = ({ folderId }: { folderId: string }) => {
  const setFolder = useSnippetsStore((state) => state.setCurrentFolder);
  const queryClient = useQueryClient();
  const current = useSnippetsStore((state) => state.currentFolder);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const snippetData = {
      title: formData.get("snippet-title") as string,
      syntax: formData.get("snippet-syntax") as string,
      description: formData.get("snippet-description") as string,
      content: `const hello = console.log("hello")`,
      folderId,
    };

    try {
      const response = await fetch("/api/snippets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(snippetData),
      });
      if (!response.ok) {
        throw new Error("Failed to create a snippet");
      }
      const newSnippet: Snippet = await response.json();
      const folder = {
        ...current,
        snippets: [...current.snippets!, newSnippet],
      };
      setFolder(folder);
      //TODO: PASS ID HERE?
      await queryClient.invalidateQueries({ queryKey: ["sections"] });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <input type="text" name="snippet-title" placeholder="add title" />
      <input type="text" name="snippet-syntax" placeholder="add syntax" />
      <textarea
        id="snippet-description"
        name="snippet-description"
        placeholder="add description"
      ></textarea>
      <button className="bg-green-300 mt-2 py-1 px-3 rounded-md">
        Add snippet
      </button>
    </form>
  );
};

export default AddSnippetForm;
