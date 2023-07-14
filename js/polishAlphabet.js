function correctPolishLetters (s) {
  let string= s.split("")
  // your code
  for (let i = 0; i < string.length; i++){
    if (string[i] === "ą") {
      string[i] = "a";
    } else if (string[i] === "ć"){
      string[i] = "c";
    } else if (string[i] === "ę"){
      string[i] = "e";
    } else if (string[i] === "ł"){
      string[i] = "l";
    } else if (string[i] === "ń"){
      string[i] = "n";
    } else if (string[i] === "ó"){
      string[i] = "o";
    } else if (string[i] === "ś"){
      string[i] = "s";
    } else if (string[i] === "ź"){
      string[i] = "z";
    } else if (string[i] === "ż"){
      string[i] = "z";
    }
  }
  
  return string.join("");
}