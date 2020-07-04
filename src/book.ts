import { gql } from 'apollo-server';

export const TypeDef = gql`
  extend type Query {
    book(id: Int!): Book
  }

  type Book {
    title: String
    author: Author
  }
`;

export const resolvers = {
  Query: {
    book: () => {
      return {
        title: 'JavaScript',
        author: 'Michael R.',
      };
    },
  },
  Book: {
    author: () => {
      return {
        id: 123,
        firstName: 'Michael',
        lastName: 'R.',
      };
    },
  },
};
