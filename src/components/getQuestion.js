export default function GetQuestion (grade, subject, section) {

  // Dynamically require our module from the curriculum.
  const dynamicallyRequiredModule = require(`./curriculum/${grade}/${subject}/${section}`)

  // Get the list of functions in our functionToCall.
  const funcList = Object.keys(dynamicallyRequiredModule)

  // console.log(funcList)

  // Get a random function from our module.
  const funcToCall = funcList[Math.floor(Math.random()*funcList.length)];

  // console.log(dynamicallyRequiredModule[funcToCall])

  // Invoke our function.
  const response = dynamicallyRequiredModule[funcToCall]()

  // Return the responds from our function.
  return response;
}