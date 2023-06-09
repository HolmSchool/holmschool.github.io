const path = require(`path`)
const _ = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

// const readme = require('./README.md')


const prevNext = (list, item) => {
  // Create a random selection of other posts (excluding the current post)
  const filterUnique = _.filter(
    list,
    input => input.node.fields.slug !== item.fields.slug
  )
  const sample = _.sampleSize(filterUnique, 2)
  if (sample.length == 1) {
    return {
      left: sample[0].node,
      right: null
    }
  }
  else if (sample.length == 0) {
    return {
      left: null,
      right: null
    }
  }
  return {
    left: sample[0].node,
    right: sample[1].node,
  }
}




exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark` && !!node.fileAbsolutePath && node.fileAbsolutePath.includes('/syllabi/')) {
      const slug = createFilePath({ node, getNode, basePath: `pages/syllabi` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `isSyllabus`,
        value: true,
      })
      createNodeField({
        node,
        name: `title`,
        value: node.frontmatter.title,
      })
      createNodeField({
        node,
        name: `subject`,
        value: node.frontmatter.subject,
      })
    }
    else if (node.internal.type === `MarkdownRemark` && !!node.fileAbsolutePath && node.fileAbsolutePath.includes('/blogposts/')) { 
      const slug = createFilePath({ node, getNode, basePath: `pages/blogposts` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `title`,
        value: node.frontmatter.title,
      })
      createNodeField({
        node,
        name: `isSyllabus`,
        value: false,
      })
    }
    else if (node.internal.type === `MarkdownRemark` && !!node.fileAbsolutePath && node.fileAbsolutePath.includes("README.md")) {
      slug = `/computer-science/`
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `isSyllabus`,
        value: true,
      })
      createNodeField({
        node,
        name: `title`,
        value: node.frontmatter.title,
      })
      createNodeField({
        node,
        name: `subject`,
        value: node.frontmatter.subject,
      })
    }
  }
  
  

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // return new Promise((resolve, reject) => {
  const result = await graphql(`
      query {
        allMarkdownRemark(filter: { fields: {isSyllabus: {eq: false }}}, sort: { fields: [frontmatter___date], order: ASC }) {
          edges {
            node {
              id
              fields {
                slug
                title
                isSyllabus
              }
            }
          }
        }
      }
    `)
    const syllabi = await graphql(`
    query {
      allMarkdownRemark(filter: {fields: {isSyllabus: {eq: true}}}, sort: { fields: [frontmatter___subject], order: ASC }) {
        edges {
          node {
            id
            fields {
              slug
              title
              subject
              isSyllabus
            }
          }
        }
      }
    }
  `)
  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(({ node }, index) => {
      const { left, right } = prevNext(posts, node)
      if (node.fields == null) { return; }
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
          prev: index === 0 ? null : posts[index - 1].node,
          next: index === (posts.length - 1) ? null : posts[index + 1].node,
          left: index === 0 ? null : left,
          right: index === (posts.length - 1) ? null : right
        },
      })
    })
  const syllabi_data = syllabi.data.allMarkdownRemark.edges
  syllabi_data.forEach(({ node }, index) => {
    if (node.fields == null) { return; }
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/syllabi.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug
      }
    })
  })
  const departments_data = await graphql(`query FirstChallenge {
    
    allChallengeNode(
      sort: {fields: [challenge___superBlock, challenge___department, challenge___block, challenge___challengeOrder], order: [ASC, ASC, ASC, ASC] }
      
    ) {
      edges {
        node {
          challenge {
            block
            department
            superBlock
            title
            fields {
              slug
              blockName
            }
          }
        }
      }
      
    }
  }
`)

  const key = 'superBlock';
  const uniqueDepartments = [...new Map(departments_data.data.allChallengeNode.edges.map(x => createDepartmentsDict(x)).map(item => [item[key], item])).values()];
  uniqueDepartments.forEach(department => {
    createPage({
      path: `/learn/${department.superBlock}/`,
      component: path.resolve("src/pages/department.js"),
      context: { department: department.superBlock, name: department.name },
    })
  })

  let coursesKey = "block"
  const uniqueCourses = [...new Map(departments_data.data.allChallengeNode.edges.map(x => createDepartmentsCoursesDict(x)).map(item => [item[coursesKey], item])).values()];
  uniqueCourses.forEach(department => {
    createPage({
      path: `/learn/${department.superBlock}/${department.block}`,
      component: path.resolve("src/pages/course.js"),
      context: { department: department.superBlock, name: department.name, course: department.block, departmentName: department.department },
    })
  })

  let lessonsKey = "slug"
  const uniquelessons = [...new Map(departments_data.data.allChallengeNode.edges.map(x => createLessonsDict(x)).map(item => [item[lessonsKey], item])).values()];
  let i = 0;
  let lengthLessons = uniquelessons.length;
  uniquelessons.forEach(department => {
    // Find previous and next lesson:
    let nextSlug = "";
    let nextName = "";
    let previousSlug = "";
    let previousName = "";
    if (i > 0 && i < lengthLessons - 1) {
      let prev = uniquelessons[(i - 1)];
      let next = uniquelessons[(i + 1)];
      if (
        prev.block == department.block &&
        prev.superBlock == department.superBlock
        ) {
          previousSlug = prev.slug;
          previousName = prev.name;
      }
      if (
        next.block == department.block &&
        next.superBlock == department.superBlock
        ) {
          nextSlug = next.slug;
          nextName = next.name;
      }
    }
    createPage({
      path: department.slug,
      component: path.resolve("src/pages/lesson.js"),
      context: { 
        department: department.superBlock,
        name: department.name,
        course: department.block,
        slug: department.slug,
        nextSlug: nextSlug,
        nextName: nextName,
        prevSlug: previousSlug,
        prevName: previousName,
      },
    })
    i++;
  })
}

let createDepartmentsDict = (challenge) => {
  let dict = {
    "name": challenge.node.challenge.department,
    "superBlock": challenge.node.challenge.superBlock,
  }
  return dict;
}

let createDepartmentsCoursesDict = (challenge) => {
  let dict = {
    "name": challenge.node.challenge.fields.blockName,
    "superBlock": challenge.node.challenge.superBlock,
    "block": challenge.node.challenge.block,
    "department": challenge.node.challenge.department
  }
  return dict;
}

let createLessonsDict = (challenge) => {
  let dict = {
    "name": challenge.node.challenge.title,
    "superBlock": challenge.node.challenge.superBlock,
    "block": challenge.node.challenge.block,
    "slug": challenge.node.challenge.fields.slug,
  }
  return dict
}

// exports.onCreatePage = async ({page, actions}) =>{
//   const {createPage} = actions
//   console.log('Page - ' + page.page);
//   // if(page.path.match(/^\/learn\/\N+\/\N+/)){
//   //   createPage({
//   //       path: "/learn",
//   //       matchPath: "/learn/:department/:lesson",
//   //       component: path.resolve("src/pages/lesson.js"),

//   //   })
//   // }
//   // if(page.path.match(/^\/learn/)){
//   //     createPage({
//   //         path: "/learn",
//   //         matchPath: "/learn/:department",
//   //         component: path.resolve("src/pages/department.js"),
//   //     })
//   // }
//   const { data } = await graphql(`
//     query AllDepartments{
//       allChallengeNode(
//         edges {
//           node {
//             challenge {
//               department
//               block
//               superBlock
//             }
//           }
//         }
//       ) 
//   `)
//   // TODO: UNIQUENESS???
//   data.allChallengeNode.edges.node.challenge.superBlock.forEach(node => {
//     const slug = node.challenge.superBlock
//     let department = node.challenge.department
//     actions.createPage({
//       path: "/learn/" + slug,
//       component: require.resolve("src/pages/department.js"),
//       context: { department: department },
//     })
//   })
// }