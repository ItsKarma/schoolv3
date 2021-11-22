import fs from 'fs'
import path from 'path'
import getConfig from 'next/config'

export default (req, res) => {
  const { serverRuntimeConfig } = getConfig()

  // TODO: Can clean up a lot of this code, but it works for now.
  let grade = '';
  let subject = '';
  // Get grade and subject from the query string from the request.
  if ('grade' in req.query && req.query.grade != 'undefined') grade = req.query.grade;
  if ('subject' in req.query && req.query.subject != 'undefined') subject = req.query.subject;

  // Build our subdir depending if we want grade, or grade + subject.
  let subdir = '';
  if (grade) subdir = grade
  if (grade && subject) subdir = `${grade}/${subject}`

  let dir = []
  // Init empty formattedFilenames array.
  let formattedFilenames = []

  if (subdir != '') {
    // Generate the path name to lookup.
    dir = path.join(serverRuntimeConfig.PROJECT_ROOT, `./components/curriculum/${subdir}`);
    // Make the fs call to get the filenames.
    const filenames = fs.readdirSync(dir);

    // Loop over our filenames.
    filenames.forEach(file => {
      // Remove the .js file extension.
      formattedFilenames.push(file.split(".js")[0]);
    });
    // console.log(formattedFilenames);
  }

  res.statusCode = 200
  res.json(formattedFilenames)
}