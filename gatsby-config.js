module.exports = {
  siteMetadata: {
    title: `Sadique Galaria`,
    name: `Sadique Galaria`,
    siteUrl: `https://sadiquegalaria.netlify.com`,
    description: `Resume-Blog`,
    hero: {
      heading: ``,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/galaria_sadik`,
      },
      {
        name: `github`,
        url: `https://github.com/Sadique523`,
      },
      {
        name: `instagram`,
        url: `https://instagram.com/sadik007`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/sadique-galaria-7a5b19163/`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sadique Galaria`,
        short_name: `SG`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/logo.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
