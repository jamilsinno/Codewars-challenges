// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.
// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.
// The input will be a lowercase string with no spaces.
// Good luck!

// If you like this Kata, please try:

// Indexed capitalization
// Even-odd disparity

// test cases

// describe("Basic tests", function(){
//     Test.assertDeepEquals(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
//     Test.assertDeepEquals(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
//     Test.assertDeepEquals(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
//     Test.assertDeepEquals(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
//     });


// solution

function capitalize(s){
    // const arr = ['','']
    // upperCase = true

    // for(let i = 0; i < arr.length; i++){
    //     if(upperCase === toUpperCase){
    //         arr[0] += s[i].toUpperCase()
    //         upperCase !== upperCase
    //     }else{
    //         arr[0] += s[i+1].toLowerCase()
    //         upperCase !== upperCase
    //     }
    // }

    // UpperCase = false
    // for(let i = 0; i < s.length; i++){
    //     if(upperCase === true){
    //         arr[1] += s.[i].toUpperCase()
    //         upperCase !== upperCase
    //     }else{
    //         arr[1] += s[i].toUpperCase()
    //         upperCase !== upperCase
    //     }
    // }
    // return arr

    const odd = s.split('').map((l, i)=> (i%2 === 0) ? l : l.toUpperCase()).join('')
    const even = s.split('').map((l, i)=> (i%2 === 0) ? l.toUpperCase() : l).join('')
    return [even, odd];

  };