import { groq } from "next-sanity";

// ბლოგის ყველა სტატია (სია)
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    slug,
    publishedAt,
    category,
    excerpt,
    excerptEn,
    "imageUrl": mainImage.asset->url
  }
`;

// სოციალური მედიის პოსტები
export const socialPostsQuery = groq`
  *[_type == "socialPost"] | order(publishedAt desc) {
    _id,
    title,
    titleEn,
    description,
    descriptionEn,
    platform,
    postUrl,
    publishedAt,
    "thumbnailUrl": thumbnail.asset->url
  }
`;

// ერთი სტატია slug-ით
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    slug,
    publishedAt,
    category,
    excerpt,
    excerptEn,
    body,
    bodyEn,
    "imageUrl": mainImage.asset->url
  }
`;
