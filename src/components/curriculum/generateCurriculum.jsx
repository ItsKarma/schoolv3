export default function GenerateCurriculum (grade, subject, section) {
  // Returns a completed object of all of our curriculum for every grade, subject section and unit.

  // Dynamically require our module from the curriculum.
  const dynamicallyRequiredModule = require(`./${grade}/${subject}/${section}`)
  
  // Get the list of functions in our functionToCall.
  const funcList = Object.keys(dynamicallyRequiredModule)
  
  // console.log(funcList)
  
  // Get a random function from our module.
  const funcToCall = funcList[Math.floor(Math.random()*funcList.length)];
  
  // console.log(dynamicallyRequiredModule[funcToCall])
  
  // Invoke our function.
  const response = dynamicallyRequiredModule[funcToCall]()

  let fullCurriculum = {};
  
  // Return the responds from our function.
  return fullCurriculum;
}