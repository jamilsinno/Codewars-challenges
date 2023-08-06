function alternateCase(s) {
    let ans = '';
    for (let i = 0; i < s.length; i++){
      if (s[i] === s[i].toLowerCase()){
        ans += s[i].toUpperCase();
      } else {
        ans += s[i].toLowerCase();
      }
    }
    return ans;
  }