function menFromBoys(arr){
    //your code here
    let even = [];
    let odd = [];
    
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
    
    return [... new Set([...even.sort((a,b) => a - b), ...odd.sort((a,b) => b - a)])]
  }