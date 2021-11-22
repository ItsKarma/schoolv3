// import getFileTree from './components/getFileTree';
const { getFileTree, getSections } = require('./components/getFileTree.js');
const fileTree = getFileTree();
const sections = getSections();

// TODO: get the pages list from a global location
//   The individual pages should also get their list from this global location as well
//   This way the exported pages matches the list actually displayed on the page.
// TODO: Can we use our api getSectionNumbers.js to actually generate this list.
//   We should be able to scan the filesystem right here to build out the pages list.

// const pages = {
//   "K": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "1": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "2": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "3": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "4": {
//     "math": ["1.1"],
//     "science": [],
//     "english": [],
//     "socialstudies": []
//   },
//   "5": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "6": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "7": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "8": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "9": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "10": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "11": { "math": [], "science": [], "english": [], "socialstudies": [] },
//   "12": { "math": [], "science": [], "english": [], "socialstudies": [] }
// }

module.exports = {

  reactStrictMode: true,
  poweredByHeader: false,

  // serverRuntimeConfig: {
  //   PROJECT_ROOT: __dirname
  // },

  publicRuntimeConfig: {
    fileTree
  },

  async headers() {
    // init our empty formatted headers.
    formattedHeaders = []
    // Loop over our sections and add them in the proper format.
    sections.forEach(section => {
      formattedHeaders.push({
        source: `/${section}`,
        headers: [
          { key: 'content-type', value: 'text/html' },
        ],
      });
    });

    return formattedHeaders;
    // return [
    //   {
    //     source: '/4/math/1.1',
    //     headers: [
    //       {
    //         key: 'content-type',
    //         value: 'text/html',
    //       },
    //     ],
    //   },
    // ]
  },

  async exportPathMap() {
    const staticRoutes = {
      '/': { page: '/' }, // Index page
    };

    // Init empty gradeRoutes
    const gradeRoutes = {};

    // Loop through each object in the fileTree.
    // Create a page for each Grade
    Object.keys(fileTree).forEach(grade => {
      gradeRoutes[`/${grade}`] = { page: '/[grade]'};
      // Create a page for each subject in each grade.
      Object.keys(fileTree[`${grade}`]).forEach(subject => {
        gradeRoutes[`/${grade}/${subject}`] = { page: '/[grade]/[subject]'};
        // Create a section page for each subject in each grade.
        fileTree[`${grade}`][`${subject}`].forEach(section => {
          gradeRoutes[`/${grade}/${subject}/${section}`] = { page: '/[grade]/[subject]/[section]'};
        });
      });
    });

    // Combine our multiple route objects into a single one to export.
    const routes = Object.assign({}, staticRoutes, gradeRoutes );

    return routes;
  }
}
