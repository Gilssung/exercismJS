/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  var str = message.replace(/[^a-zA-Z0-9!?]+/g, "");
  var strOnlyAlpha = message.replace(/[^a-zA-Z]+/g, "");
  var isYelling = strOnlyAlpha.toUpperCase() == strOnlyAlpha && strOnlyAlpha;
  var last = str[str.length - 1];

  if(last == '?') {
    if(isYelling) {
      return "Calm down, I know what I'm doing!";
    } else {
      return "Sure.";
    }
  } else {
    if(!str) {
      return "Fine. Be that way!";
    } else if (isYelling) {
      return "Whoa, chill out!";
    } else {
      return "Whatever.";
    }
  }
};
