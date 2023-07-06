function sortMyString(S) {
    // your code here
  let s1 = "";
  let s2 = "";
  
  for (let i = 0; i < S.length; ++i){
    i % 2 === 0 ? s1 += S[i] : s2 += S[i]
  }
    return `${s1} ${s2}`;
}