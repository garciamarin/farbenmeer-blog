import {
  ApolloClient,
  InMemoryCache,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

const blogs = gql`
  query getBlogs_gql {
      blogposts {
        id
        title
        author
        subtitle
        created
        image
      }
    }
  `
const getBlog = gql`
  query blogpost($id: ID!) {
    blogpost(id: $id) {
        id
        title
        author
        subtitle
        created
        image
        content
    }
  }
`

export { client, blogs, getBlog }