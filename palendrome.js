var isPalindrome = function (x) {
  const stringifiedInput = x.toString();
  let stringifiedInputReversed = "";
  // reverse input
  for (var i = stringifiedInput.length - 1; i >= 0; i--) {
    stringifiedInputReversed += stringifiedInput[i];
  }
  // check if input matches reversed input
  if (stringifiedInput === stringifiedInputReversed) {
    return true;
  } else {
    return false;
  }
};
