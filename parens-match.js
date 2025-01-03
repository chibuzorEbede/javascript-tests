//given a function isValid takes a string of parens characters

//input type '{}[]()' valid
//input '{[()]}' valid
//input '([)]' not valid

//constraints
//opening and closing chars must match

/*

process

1. split the string into single parts
2. compare values of opening chars and closing chars
3. set the result in the comparison flag

*/

function isValid(s) {
  console.log("running script!");

  const stringParts = s.split("");

  //flags
  let validFlag = false;
  let consecutiveParensFlag = false;
  let openingAndClosingParensFlag = false;

  //check that string parts are an even number
  if (stringParts.length % 2 !== 0) {
    console.log("input parameters not valid");
    return validFlag;
  }

  //check consecutive parens pairs
  const pairObjects = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i = 0; i < stringParts.length - 1; i += 2) {
    let first = stringParts[i];
    let second = stringParts[i + 1];

    if (pairObjects[`${first}`] !== second) {
      consecutiveParensFlag = false;
      break;
    } else {
      consecutiveParensFlag = true;
    }
  }

  //end the function if the consecutive test works for all candidates else test for the matching parens option
  if (consecutiveParensFlag) {
    validFlag = true;

    return validFlag;
  }

  //check for the matching parens option

  let copyStringParts = [...stringParts];
  for (let i = 0; copyStringParts.length > 0; i++) {
    console.log(`the copyStringParts is ${copyStringParts}`);

    let opening = copyStringParts.shift();
    let closing = copyStringParts.pop();

    console.log(`opening is ${opening}`);
    console.log(`closing is ${closing}`);

    if (pairObjects[`${opening}`] === closing) {
      openingAndClosingParensFlag = true;
    }
    if (pairObjects[`${opening}`] !== closing) {
      openingAndClosingParensFlag = false;
    }
  }

  if (openingAndClosingParensFlag) {
    validFlag = true;
    return validFlag;
  }

  return false;
}

//setup app runner
function runApp() {
  if (isValid("{[(-]}")) {
    console.log("the input is valid");
  } else {
    console.log("the input is invalid");
  }
}

runApp();
