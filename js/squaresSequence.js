function squares(x, n) {
  if (n <= 0) return [];
  let ans = [x];
  
  for (let i = 1; i < n; i++) {
    ans.push(Math.pow(ans[i-1], 2)); 
  }
  return ans;
}