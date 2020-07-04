import { gql } from 'apollo-server';

export const TypeDef = gql`
  extend type Query {
    author(id: Int!): Author
  }

  type Author {
    id: Int!
    firstName: String
    lastName: String
    books: [Book]
  }
`;

export const resolvers = {
  Query: {
    author: () => {
      return {
        id: 123,
        firstName: 'Michael',
        lastName: 'R.',
      };
    },
  },
  Author: {
    books: () => {
      return [
        {
          title: 'JavaScript',
          author: 'Michael R.',
        },
        {
          title: 'TypeScript',
          author: 'Michael R.',
        },
        {
          title: 'Graphql',
          author: 'Michael R.',
        },
      ];
    },
  },
};
