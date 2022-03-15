export default function GetCurriculum(grade, subject) {

  // Dynamically require our module from the curriculum.
  const dynamicallyRequiredModule = require(`./curriculum/${grade}/${subject}`)

  // Invoke our function.
  const response = dynamicallyRequiredModule;

  // Return the responds from our function.
  return response;
}