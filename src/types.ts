export type User = {
  id: string,
  username: string
  email: string
  password: string
  createAt: string
}

type AllUserSnippets = {
  collections: Collections | [],
  favorites: Favorites | []
}

export type UserWithAllSnippets = User & AllUserSnippets

export type Collections = {
  id: string
  title: string
  userId: string
  sections: Sections[] | []
}

export type Sections = {
  id: string
  title: string
  folders: Folder[] | []
}

export type Folder = {
  id: string,
  title: string,
  snippets: SingleSnippet[] | []
}

export type SingleSnippet = {
  id: string,
  title: string,
  content: string
  syntax: string,
  sectionId: string,
  //tags: Tag[] | []
}

export type Favorites = {
  id: string,
  userId: string,
  snippets: SingleSnippet[]
}

// type Tag = {
//   id: string,
//   name: string,
//   content: string,
// }

