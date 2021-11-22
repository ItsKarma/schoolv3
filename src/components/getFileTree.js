const { readdirSync } = require('fs');

const getFileTree = () => {
  // Init empty file tree array.
  let fileTree = {}
  dir = './components/curriculum';

  // Make the fs call to get the filenames.
  const gradeFilenames = readdirSync(dir);

  // Loop over our filenames.
  gradeFilenames.forEach(grade => {
    // Init our subject within this grade.
    fileTree[grade] = {};
    // Get our subjects within this grade.
    const subjectFilenames = readdirSync(`${dir}/${grade}`);
    // Loop over subjects to get sessions within them.
    subjectFilenames.forEach(subject => {
      // Get our subjects within this grade.
      const sectionFilenames = readdirSync(`${dir}/${grade}/${subject}`);
      // Init our empty formatted section filenames.
      formattedSectionFilenames = [];
      // Loop over our sections to remove the .js file extension.
      sectionFilenames.forEach(section => {
        // Remove the .js file extension.
        formattedSectionFilenames.push(section.split(".js")[0]);
      });
      // Put the the subject within the grade.
      fileTree[grade][subject] = formattedSectionFilenames;
    });
  });

  return fileTree
}

const getSections = () => {
  // Get our file tree.
  const fileTree = getFileTree();
  // Init empty sections array.
  let sections = []

  // console.log(fileTree)

  // Loop over the grades.
  Object.keys(fileTree).forEach(grade => {
    // Loop over the subjects.
    Object.keys(fileTree[grade]).forEach(subject => {
      // Loop over the sections
      fileTree[grade][subject].forEach(section => {
        // Generate list of full paths to sections.
        sections.push(`${grade}/${subject}/${section}`)
      });
    });
  });

  return sections
}

module.exports = {
  getFileTree,
  getSections
}