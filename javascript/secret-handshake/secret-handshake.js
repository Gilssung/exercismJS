//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var dict = {
  1 : 'wink',
  2 : 'double blink',
  4 : 'close your eyes',
  8 : 'jump'
};

export const secretHandshake = (num) => {
  if(isNaN(num)) 
    throw Error('Handshake must be a number');

  var inputNum = num > 16 ? num ^ 16 : num; //  get list numbers
  var flag = inputNum != num;               //  reverse flag
  var resultArr = [];

  var tempNum = inputNum;
  var index = 1;
  while(tempNum > 0) {
    if(tempNum & 1 == 1) {
      resultArr.push(dict[index]);
    }
    index *= 2;
    tempNum = tempNum >> 1;                 //  divided by 2
  }

  return flag ? resultArr.reverse() : resultArr;
};
