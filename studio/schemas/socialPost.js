export default {
  name: "socialPost",
  title: "სოც. მედია პოსტი",
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
      name: "description",
      title: "მოკლე აღწერა (ქართული)",
      type: "text",
      rows: 3,
    },
    {
      name: "descriptionEn",
      title: "Short description (English)",
      type: "text",
      rows: 3,
    },
    {
      name: "platform",
      title: "პლატფორმა",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "YouTube", value: "youtube" },
        ],
        layout: "radio",
      },
      initialValue: "facebook",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "postUrl",
      title: "პოსტის URL",
      description:
        "Facebook/Instagram/YouTube-ის პოსტის ლინკი (ბრაუზერის მისამართი)",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "thumbnail",
      title: "Preview სურათი (სურვილისამებრ)",
      description: "თუ არ დაამატებ, პლატფორმის ლოგო ჩანს",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "publishedAt",
      title: "გამოქვეყნების თარიღი",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      platform: "platform",
      media: "thumbnail",
      date: "publishedAt",
    },
    prepare({ title, platform, media, date }) {
      const icons = { facebook: "📘", instagram: "📷", youtube: "▶️" };
      return {
        title: `${icons[platform] ?? "🔗"} ${title}`,
        media,
        subtitle: date ? new Date(date).toLocaleDateString("ka-GE") : "",
      };
    },
  },
};
