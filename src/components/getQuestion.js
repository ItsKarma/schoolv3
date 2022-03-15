export default function GetQuestion (grade, subject, section, unit) {

  // Dynamically require our module from the curriculum.
  const dynamicallyRequiredModule = require(`./questions/${grade}/${subject}/${section}.${unit}`)

  // Get the list of functions in our functionToCall.
  const funcList = Object.keys(dynamicallyRequiredModule.default)

  // console.log(funcList)

  // Get a random index that we will use.
  const randNum = Math.floor(Math.random()*funcList.length)

  // console.log(randNum)

  // Get a random function from our module.
  const funcToCall = funcList[randNum];

  // console.log(dynamicallyRequiredModule[funcToCall])

  // Invoke our function.
  const response = dynamicallyRequiredModule.default[funcToCall]()

  // Return the responds from our function.
  return response;
}