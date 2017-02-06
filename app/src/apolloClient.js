import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';

const baseUrl = process.env.API_URL || 'http://localhost:3000';
const url = `${baseUrl}graphql`;

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: url,
  }),
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : null, // eslint-disable-line
  ssrForceFetchDelay: 100,
  queryTransformer: addTypeName,
});

export default client;
