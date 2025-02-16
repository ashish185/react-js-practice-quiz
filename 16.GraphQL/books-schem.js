export const bookTypeDef = `#graphql
type Book {
    id: ID!
    title: String!
    publishedYear: Int!
    author: Author!
  }
  
  type Author {
    id: ID!
    name: String!
    books: [Book!]!
  }
  
  type Query {
    getBooks: [Book!]!
    getBook(id: ID!): Book
    getAuthors: [Author!]!
    getAuthor(id: ID!): Author
  }
  
  type Mutation {
    addBook(title: String!, publishedYear: Int!, authorId: ID!): Book
    addAuthor(name: String!): Author
  }
`;
