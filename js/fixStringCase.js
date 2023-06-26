function solve(s){
    //..
  let countUp = 0;
  let countDown = 0;
  
  let arr = s.split('');
  
  for (let i = 0; i < arr.length / 2; ++i){
    if (arr[i] === arr[i].toLowerCase()){
      countDown++;
    } else {
      countUp++;
    }
    
    if (arr[arr.length - 1 - i] === arr[arr.length - 1 - i].toLowerCase()){
      countDown++;
    } else {
      countUp++;
    }
  }
  
  if (countUp > countDown){
    return s.toUpperCase();
  }
  
  return s.toLowerCase();
}