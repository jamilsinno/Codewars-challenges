function sumOfIntegersInString(s){
  const arr = s.split('');
  let ans = [];
  let temp = ""; 
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] == +arr[i]) {
      temp += arr[i]
      if (i === arr.length - 1) {
        ans.push(temp)
      }
    } else if (arr[i] != +arr[i] && temp.length > 0){
        ans.push(temp);
        temp = "";
    }
  }
  return ans.reduce((pv, cv) => pv + +cv, 0)
}