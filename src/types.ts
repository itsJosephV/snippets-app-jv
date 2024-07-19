type User = {
  id: string,
  username: string
  email: string
  password: string
  createAt: string
  collections: Collections[]
  favorites: Favorites
}

type Collections = {
  id: string
  title: string
  userId: string
  sections: Sections[]
}

type Sections = {
  id: string
  title: string
  folders: Folder[]
}

type Folder = {
  id: "folder-uuid-1",
  title: "General JS",
  snippets: Snippet[]
}

type Snippet = {
  id: string,
  title: string,
  content: string
  syntax: string, //enum
  sectionId: string,
  tags: Tag[]
}

type Tag = {
  id: string,
  name: string, //enum
  content: string,
}

type Favorites = {
  id: string,
  userId: string,
  snippets: Snippet[]
}