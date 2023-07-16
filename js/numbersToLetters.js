function switcher(x) {
  const charMap = {
    27: '!',
    28: '?',
    29: ' ',
  };

  let arr = x.map(c => +c)
    .map(num => num in charMap ? charMap[num] : String.fromCharCode(97 + 26 - num));
  
  return arr.join("");
}
