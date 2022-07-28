function isPalindrome(line) {
    return line == String(line).split('').reverse().join('')
  }