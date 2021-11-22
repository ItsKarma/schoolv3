const { getFileTree, getSections } = require('./components/getFileTree.js');
const fileTree = getFileTree();
const sections = getSections();

module.exports = {

  reactStrictMode: true,
  poweredByHeader: false,

  publicRuntimeConfig: {
    fileTree
  },

  async headers() {
    // We serve the section files with no .html extension, so we need to specify that it is
    //  an html file in the Header, otherwise the browser will download the file instead of displaying it.

    // Init our empty formatted headers.
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
