function solve(s){
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    let ans = [];
    for (let i = 0; i < s.length; i++){
      if(vowels.includes(s[i])){
        count++;
      } else if (!vowels.includes(s[i])){
        ans.push(count);
        count = 0;
      }
    }
   return Math.max(...ans);
  }