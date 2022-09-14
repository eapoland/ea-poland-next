import { gql } from "@apollo/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import client from "../../apollo-client";

export async function getStaticPaths({ locales }) {
  const { data } = await client.query({
    query: gql`
      query Posts {
        posts {
          nodes {
            slug
          }
        }
      }
    `,
  });

  const paths = [];

  data.posts.nodes.forEach((item) => {
    for (const locale of locales) {
      paths.push({
        params: {
          slug: item.slug,
        },
        locale,
      });
    }
  });

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      {/* <Head>
        <title>{postData.attributes.title} - Hawelka.dev</title>
        {postData.attributes.SEO && (
          <>
            <meta
              name="description"
              content={postData.attributes.SEO.metaDescription}
            />
            <meta property="og:title" content={postData.attributes.title} />
            <meta property="og:type" content="article" />
            <meta
              property="og:image"
              content={postData.attributes.SEO.metaImage.data.attributes.url}
            />
            <meta
              property="twitter:image"
              content={
                postData.attributes.SEO.metaTwitterImage.data.attributes.url
              }
            />
            <meta property="twitter:card" content="summary_large_image" />
          </>
        )}
      </Hea>
      <ReactMarkdown className="prose prose-sm md:prose-lg lg:prose-xl xl:prose-2xl prose-slate w-11/12 mx-4 my-8">
        {postData.attributes.content}
      </ReactMarkdown> */}
      <div
        className="prose lg:prose-xl"
        dangerouslySetInnerHTML={{ __html: postData ? postData.content : "" }}
      ></div>
    </>
  );
}

export async function getStaticProps({ params, locale }) {
  const { data } = await client.query({
    query: gql`
        query GET_POST {
          post(id: "${params.slug}", idType: SLUG) {
            featuredImage {
              node {
                sourceUrl
                slug
              }
            }
            categories {
              edges {
                node {
                  id
                  name
                }
                isPrimary
              }
            }
            title(format: RENDERED)
            date
            author {
              node {
                name
                customuser {
                  photo {
                    sourceUrl
                    slug
                  }
                  email
                  linkedin
                }
                description
              }
            }
            content(format: RENDERED)
            tags {
              nodes {
                id
                name
                slug
              }
            }
            seo {
              title
              metaDesc
              fullHead
            }
          }
        }
      `,
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      postData: data.post,
    },
  };
}
