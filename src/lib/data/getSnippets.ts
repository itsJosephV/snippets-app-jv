export const getSnippets = async (folderId: string) => {
  const res = await fetch(`http://localhost:3000/api/snippets/${folderId}`);
  if (!res.ok) {
    throw new Error(`An error ocurred, Status: ${res.status}`);
  }
  return res.json();
};