export const getSnippets = async (folderId: string) => {
  const res = await fetch(`http://localhost:3000/api/snippets?folderId=${folderId}`);

  if (res.status === 404) {
    return { title: 'No folder selected', snippets: [] };
  }
  if (!res.ok) {
    throw new Error(`An error occurred, Status: ${res.status}`);
  }

  const folder = await res.json();
  console.log(folder);
  return {
    title: folder.title,
    snippets: folder.snippets,
  };
};