import { gql } from "@apollo/client";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Slider from "react-slick";
import client from "../../apollo-client";
import Button from "../../components/Button";

export default function Blog({ blogData }) {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    cssEase: "linear",
    pauseOnHover: true,
    className: "flex items-center",
    dots: true,
    arrows: false,
  };
  return (
    <div className="mt-20">
      <Slider {...settings}>
        {blogData.recommendedPosts.nodes.map((post) => (
          <div
            className="flex flex-col justify-center items-start"
            key={post.slug}
          >
            <div
              className="flex flex-col justify-center gap-4 items-start px-[6.25rem] h-[36.25rem]"
              style={{
                backgroundImage: `linear-gradient(
                        180deg,
                        rgba(0, 0, 0, 0.5452556022408963),
                        rgba(0, 0, 0, 0.5452556022408963)
                      ), url(https://ea-poland-wordpress.azurewebsites.net${post.featuredImage.node.sourceUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                color: "#f5f5f5",
              }}
            >
              <span className="flex items-center gap-4">
                <img
                  className="w-10 rounded-full"
                  src={`https://ea-poland-wordpress.azurewebsites.net${
                    post.author.node.customuser.photo &&
                    post.author.node.customuser.photo.sourceUrl
                  }`}
                  alt={post.author.node.slug}
                />
                <p className="font-sans uppercase text-sm font-bold">
                  {post.author.node.name} /{" "}
                  {post.categories.edges
                    .filter((c) => c.isPrimary)
                    .map((cat) => cat.node.name)}
                </p>
              </span>
              <h1 className="font-alt text-3xl text-white">{post.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.excerpt,
                }}
                className=""
              />
              <Button text="Czytaj dalej" href={`/blog/${post.slug}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const { data } = await client.query({
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

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      blogData: data,
    },
  };
}
