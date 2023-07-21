function jumpingNumber(n){
  let arr = [];
  
  while (n > 0) {
    arr.push(n % 10);
    n = Math.floor(n/10);
  }
  
  if (arr.length === 1) return "Jumping!!"
  
  for (let i = 1; i < arr.length; i++){
    if (Math.abs(arr[i] - arr[i-1]) !== 1) {
      return "Not!!";
    }
  }
  
  return "Jumping!!";
}