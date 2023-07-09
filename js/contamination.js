function contamination(text, char){
  // Code here ;)
  if (char === "") return "";
  let str = "";
  let i = 0;
  
  while (i < text.length){
    str += char;
    ++i;
  }
  
  return str;
}