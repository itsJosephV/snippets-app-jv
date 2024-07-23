type User = {
  id: string,
  username: string
  email: string
  password: string
  createAt: string
}

type AllUserSnippets = {
  collections: Collections,
  favorites: Favorites
}

type UserWithAllSnippets = User & AllUserSnippets

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
  id: string,
  title: string,
  snippets: SingleSnippet[]
}

type SingleSnippet = {
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
  snippets: SingleSnippet[]
}