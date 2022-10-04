import { gql } from "@apollo/client";
import client from "../../apollo-client";

export const getBlogPosts = async (pageParams) => {
  console.log(pageParams);
  return client.query({
    query: gql`
      query GET_DATA {
        posts(first: ${pageParams.first}, last: ${pageParams.last}, after: "${pageParams.after}", before: "${pageParams.before}") {
          nodes {
            author {
              node {
                customuser {
                  photo {
                    sourceUrl
                  }
                }
                slug
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
                slug
              }
            }
            excerpt(format: RENDERED)
            slug
            title(format: RENDERED)
            id
            categories {
              edges {
                node {
                  id
                  name
                }
                isPrimary
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            endCursor
            startCursor
          }
        }
      }
    `,
  });
};

export const getBlogMainData = async () => {
  return client.query({
    query: gql`
      query GET_DATA {
        categories(where: { parent: null }) {
          nodes {
            id
            slug
            name
          }
        }
        recommendedPosts: posts(where: { tag: "polecane" }) {
          nodes {
            author {
              node {
                customuser {
                  photo {
                    sourceUrl
                  }
                }
                slug
                name
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
            excerpt(format: RENDERED)
            slug
            title(format: RENDERED)
            id
            categories {
              edges {
                node {
                  id
                  name
                }
                isPrimary
              }
            }
          }
        }
      }
    `,
  });
};
