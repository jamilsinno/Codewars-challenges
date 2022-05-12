// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.
  
  function disemvowel(str) {
    let lowerCase = 'aeiou'.split('')
    let upperCase = 'AEIOU'.split('')

    return str.split('').filter( x => lowerCase.indexOf(x) === -1).filter( x => upperCase.indexOf(x) === -1).join('')
  }


  console.log(disemvowel('This is a test'))
  console.log(disemvowel('This Is A test'))
  console.log(disemvowel('Thi$ is @ test'))
  console.log(disemvowel('No offense but,\nYour writing is among the worst I\'ve ever read'))