import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4otc0wy0w6701xt5tow3l9z/master',
  cache: new InMemoryCache()
})