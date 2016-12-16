import ApolloClient, {
  createNetworkInterface,
  addTypeName,
} from 'apollo-client';
import { BASE_URL } from 'config';

const url = `${BASE_URL}graphql`;

const client = new ApolloClient({
  networkInterface: createNetworkInterface(url),
  initialState: typeof window !== 'undefined' ? window.__APOLLO_STATE__ : null,
  ssrForceFetchDelay: 100,
  queryTransformer: addTypeName,
});

export default client;
