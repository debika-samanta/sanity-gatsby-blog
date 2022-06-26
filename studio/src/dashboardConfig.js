export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62b86ef012874951372059a3",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-wdu1aqm7",
                  apiId: "ba26b87b-16b3-470c-bb2f-bbc7597ddc58",
                },
                {
                  buildHookId: "62b86ef0b12f654f13ae6c86",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-1wisnapb",
                  apiId: "85b9619f-6021-4bae-ad6f-4b85654413a5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/debika-samanta/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-1wisnapb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
