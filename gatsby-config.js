module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Koodauskoirakoulu",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/content`,
        commonmark: false
      }
    },
    "gatsby-plugin-mdx"
  ],
};
