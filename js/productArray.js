function productArray(numbers){
    //your code here
    let ans = [];
    
    for (let i = 0; i < numbers.length; i++){
      let temp = numbers.filter((int, j) => j !== i).reduce((a,b) => a * b, 1);
      ans.push(temp);
    }
    return ans;
  }