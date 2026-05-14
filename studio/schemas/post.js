export default {
  name: "post",
  title: "სტატია / Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "სათაური (ქართული)",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "titleEn",
      title: "Title (English)",
      type: "string",
    },
    {
      name: "slug",
      title: "URL სახელი (slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "publishedAt",
      title: "გამოქვეყნების თარიღი",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "კატეგორია",
      type: "string",
      options: {
        list: [
          { title: "სიახლეები", value: "სიახლეები" },
          { title: "ღონისძიება", value: "ღონისძიება" },
          { title: "სემინარი", value: "სემინარი" },
          { title: "პუბლიკაცია", value: "პუბლიკაცია" },
        ],
      },
    },
    {
      name: "mainImage",
      title: "მთავარი სურათი",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "excerpt",
      title: "მოკლე აღწერა (ქართული)",
      type: "text",
      rows: 3,
    },
    {
      name: "excerptEn",
      title: "Excerpt (English)",
      type: "text",
      rows: 3,
    },
    {
      name: "body",
      title: "სტატიის ტექსტი (ქართული)",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
    {
      name: "bodyEn",
      title: "Body (English)",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
  preview: {
    select: { title: "title", media: "mainImage", date: "publishedAt" },
    prepare({ title, media, date }) {
      return {
        title,
        media,
        subtitle: date ? new Date(date).toLocaleDateString("ka-GE") : "",
      };
    },
  },
};
