const data = {
  authors: [
    { id: "1", name: "Chirag Goel", bookIds: ["101", "102"] },
    { id: "2", name: "Akshay Saini", bookIds: ["103"] },
  ],
  books: [
    {
      id: "101",
      title: "Namaste Frontend System Design",
      publishedYear: 2000,
      authorId: "1",
    },
    { id: "102", title: "Book 2", publishedYear: 2010, authorId: "1" },
    { id: "103", title: "Book 3", publishedYear: 2020, authorId: "2" },
  ],
};

const bookResolvers = {
  Query: {
    // Get all books
    getBooks: () => data.books,

    // Get a single book by ID
    getBook: (_, { id }) => data.books.find((book) => book.id === id),

    // Get all authors
    getAuthors: () => data.authors,

    // Get a single author by ID
    getAuthor: (_, { id }) => data.authors.find((author) => author.id === id),
  },

  Mutation: {
    // Add a new book
    addBook: (_, { title, publishedYear, authorId }) => {
      const newBook = {
        id: String(data.books.length + 101), // Ensure unique IDs
        title,
        publishedYear,
        authorId,
      };

      data.books.push(newBook);

      // Add the new book to the author's book list
      const author = data.authors.find((author) => author.id === authorId);
      if (author) {
        author.bookIds.push(newBook.id);
      }

      return newBook;
    },

    // Add a new author
    addAuthor: (_, { name }) => {
      const newAuthor = {
        id: String(data.authors.length + 1), // Ensure unique IDs
        name,
        bookIds: [],
      };

      data.authors.push(newAuthor);
      return newAuthor;
    },
  },

  // Resolve author details from books
  Book: {
    author: (parent) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },

  // Resolve books associated with an author
  Author: {
    books: (parent) => {
      return data.books.filter((book) => parent.bookIds.includes(book.id));
    },
  },
};
