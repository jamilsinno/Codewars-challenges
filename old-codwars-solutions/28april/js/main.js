// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// sample tests



// solution

function abbrevName(name){
  name.split('')
    // code away
  let firstInitial = name[0].toUpperCase()
  let lastInitial = ''
  for(let i = 0; i<name.length; i++){
    if(name[i] === " "){
      lastInitial = name[i+1].toUpperCase()
    }
  }
  return `${firstInitial}.${lastInitial}`
}


//--------------------------------------------------------------------

