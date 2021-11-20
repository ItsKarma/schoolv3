export default function GetQuestion (subject, grade, section) {
  // functionToCall is in format SubjectGradeSection ie. "Grade4Section1"

  const dynamicallyRequiredModule = require(`./${subject}/${grade}/${section}`)

  // get the list of functions in our functionToCall
  const funcList = Object.keys(dynamicallyRequiredModule)

  // console.log(funcList)

  // get a random function from our module.
  const funcToCall = funcList[Math.floor(Math.random()*funcList.length)];

  // console.log(dynamicallyRequiredModule[funcToCall])

  // invoke our function
  const response = dynamicallyRequiredModule[funcToCall]()

  // return it
  return response;
}