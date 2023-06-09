const {
  buildDepartments,
  replaceDepartmentNode,
  localeDepartmentsRootDir
} = require('./utils/build-departments');

const departmentLocale = "english";

module.exports = {
  siteMetadata: {
    title: `Holm School`,
    siteUrl: `https://www.yourdomain.tld`
  },
  pathPrefix: "/holm-school",
  plugins: ["gatsby-plugin-emotion", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-123217718-1"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: 'holm-school-departments',
    options: {
      name: 'departments',
      source: buildDepartments,
      onSourceChange: replaceDepartmentNode(departmentLocale),
      curriculumPath: localeDepartmentsRootDir
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      // Footnotes mode (default: true)
      footnotes: true,
      // GitHub Flavored Markdown mode (default: true)
      gfm: true,
      // Plugins configs
      plugins: [],
    },
  },
]
};