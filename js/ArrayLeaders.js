function arrayLeaders(numbers){
    let ans = [];
    for (let i = 0; i < numbers.length; ++i){
      let sum = 0;
      
      for (let j = i + 1; j < numbers.length; ++j){
        sum += numbers[j];
      }
      
      if (numbers[i] > sum){
        ans.push(numbers[i]);
      }
    }
    return ans;
  }