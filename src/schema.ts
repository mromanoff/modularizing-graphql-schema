import { TypeDef as Book, resolvers as bookResolvers } from './book';
import { TypeDef as Author, resolvers as authorResolvers } from './author';
import { makeExecutableSchema, gql } from 'apollo-server';
import { merge } from 'lodash';

const Query = gql`
  type Query {
    _empty: String
  }
`;
const resolvers = {};

export const schema = makeExecutableSchema({
  typeDefs: [Query, Book, Author],
  resolvers: merge(resolvers, bookResolvers, authorResolvers),
});
