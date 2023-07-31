function giveMeFive(obj){
    //coding here
    let ans = [];
    for (const key in obj){
      if (key.length === 5){
        ans.push(key);
      } 
      if (obj[key].length === 5) {
        ans.push(obj[key]);
      }
    }
    return ans;
  }