import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
import { BASE_URL } from 'config';

const url = `${BASE_URL}graphql`;

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: url,
  }),
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : null,
  queryTransformer: addTypeName,
});

export default client;
