const user = {
  id: "user-uuid",
  username: "johndoe",
  email: "johndoe@example.com",
  password: "securepassword",
  imageURL: "http://example.com/image.jpg",
  sections: [
    {
      id: "section-uuid",
      title: "JavaScript Snippets",
      userId: "user-uuid",
      snippets: [
        {
          id: "snippet-uuid",
          title: "Example Snippet",
          content: "console.log('Hello, world!');",
          syntax: "JAVASCRIPT",
          sectionId: "section-uuid",
          tags: [
            {
              id: "tag-uuid-1",
              name: "TOPIC",
              content: "Logging",
            },
            {
              id: "tag-uuid-2",
              name: "FRAMEWORK",
              content: "Node.js",
            },
          ],
          favoritedBy: [
            {
              id: "favorites-uuid",
              userId: "user-uuid",
            },
          ],
        },
      ],
    },
  ],
  favorites: {
    id: "favorites-uuid",
    userId: "user-uuid",
    snippets: [
      {
        id: "snippet-uuid",
        title: "Example Snippet",
        content: "console.log('Hello, world!');",
        syntax: "JAVASCRIPT",
        sectionId: "section-uuid",
        tags: [
          {
            id: "tag-uuid-1",
            name: "TOPIC",
            content: "Logging",
          },
          {
            id: "tag-uuid-2",
            name: "FRAMEWORK",
            content: "Node.js",
          },
        ],
      },
    ],
  },
};


export const COLLECTIONS_PLACEHOLDER = {
  collections: [
    {
      id: "collection-uuid-1",
      title: "JavaScript Collection",
      userId: "user-uuid",
      sections: [
        {
          id: "section-uuid-1",
          title: "JavaScript Snippets",
          folders: [
            {
              id: "folder-uuid-1",
              title: "General JS",
              snippets: [
                {
                  id: "snippet-uuid-1",
                  title: "Example Snippet",
                  content: "console.log('Hello, world!');",
                  syntax: "JAVASCRIPT",
                  sectionId: "section-uuid-1",
                  tags: [
                    {
                      id: "tag-uuid-1",
                      name: "TOPIC",
                      content: "Logging",
                    },
                    {
                      id: "tag-uuid-2",
                      name: "FRAMEWORK",
                      content: "Node.js",
                    },
                  ],
                  favoritedBy: [
                    {
                      id: "favorites-uuid",
                      userId: "user-uuid",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "collection-uuid-2",
      title: "Python Collection",
      userId: "user-uuid",
      sections: [
        {
          id: "section-uuid-2",
          title: "Python Snippets",
          folders: [
            {
              id: "folder-uuid-2",
              title: "General Python",
              snippets: [
                {
                  id: "snippet-uuid-2",
                  title: "Print Hello World",
                  content: "print('Hello, world!')",
                  syntax: "PYTHON",
                  sectionId: "section-uuid-2",
                  tags: [
                    {
                      id: "tag-uuid-3",
                      name: "TOPIC",
                      content: "Printing",
                    },
                  ],
                  favoritedBy: [
                    {
                      id: "favorites-uuid",
                      userId: "user-uuid",
                    },
                  ],
                },
                {
                  id: "snippet-uuid-3",
                  title: "List Comprehension",
                  content: "[x for x in range(10)]",
                  syntax: "PYTHON",
                  sectionId: "section-uuid-2",
                  tags: [
                    {
                      id: "tag-uuid-4",
                      name: "TOPIC",
                      content: "Data Structures",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "collection-uuid-3",
      title: "CSS Collection",
      userId: "user-uuid",
      sections: [
        {
          id: "section-uuid-3",
          title: "CSS Snippets",
          folders: [
            {
              id: "folder-uuid-3",
              title: "General CSS",
              snippets: [
                {
                  id: "snippet-uuid-4",
                  title: "Center a Div",
                  content: ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
                  syntax: "CSS",
                  sectionId: "section-uuid-3",
                  tags: [
                    {
                      id: "tag-uuid-5",
                      name: "TOPIC",
                      content: "Layout",
                    },
                  ],
                  favoritedBy: [
                    {
                      id: "favorites-uuid",
                      userId: "user-uuid",
                    },
                  ],
                },
                {
                  id: "snippet-uuid-5",
                  title: "Responsive Grid",
                  content: ".grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n}",
                  syntax: "CSS",
                  sectionId: "section-uuid-3",
                  tags: [
                    {
                      id: "tag-uuid-6",
                      name: "TOPIC",
                      content: "Grid",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  favorites: {
    id: "favorites-uuid",
    userId: "user-uuid",
    snippets: [
      {
        id: "snippet-uuid-1",
        title: "Example Snippet",
        content: "console.log('Hello, world!');",
        syntax: "JAVASCRIPT",
        sectionId: "section-uuid-1",
        tags: [
          {
            id: "tag-uuid-1",
            name: "TOPIC",
            content: "Logging",
          },
          {
            id: "tag-uuid-2",
            name: "FRAMEWORK",
            content: "Node.js",
          },
        ],
      },
      {
        id: "snippet-uuid-2",
        title: "Print Hello World",
        content: "print('Hello, world!')",
        syntax: "PYTHON",
        sectionId: "section-uuid-2",
        tags: [
          {
            id: "tag-uuid-3",
            name: "TOPIC",
            content: "Printing",
          },
        ],
      },
      {
        id: "snippet-uuid-4",
        title: "Center a Div",
        content: ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",
        syntax: "CSS",
        sectionId: "section-uuid-3",
        tags: [
          {
            id: "tag-uuid-5",
            name: "TOPIC",
            content: "Layout",
          },
        ],
      },
    ],
  },
};