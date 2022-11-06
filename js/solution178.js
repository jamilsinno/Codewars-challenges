function shortcut (string) {
  let vowels = 'aeiou'
  let ans = string.split('').filter( el => !vowels.includes(el) ).join('')
  return ans;
}

console.log(shortcut('hello'))