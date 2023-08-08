function crap(x, bags, cap){
  let count = 0;
  
  for (let i = 0; i < x.length; i++){
    if (x[i].includes("D")) return "Dog!!"
    for (let j = 0; j < x[i].length; j++){
      if(x[i][j] === '@') {
        count++
      };
    }
  }

  if (count > bags * cap) return "Cr@p";
  return "Clean"
}