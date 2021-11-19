export default function GetQuestion (functionToCall) {
  // functionToCall is in format SubjectGradeSection ie. "MathG4S1"

  const dynamicallyRequiredModule = require(`./math/${functionToCall}`)

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