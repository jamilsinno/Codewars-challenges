// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.



// PREP 

// passed a string. Replace the first string with its char code. Replace the second letter with the last one and the last one with the second letter.

// return the encrypter string

const encryptThis = function(text) {
    // Implement me! :)
    newText = text.split(' ').map( el => {
        el.split('')
        firstLetter = el.charCodeAt(0)

        if(el.length < 2){
            return firstLetter
        }else if (el.length > 2) {
            return `${firstLetter}${el[el.length-1]}${el.slice(2, el.length-1)}${el[1]}`
        }else{
            return `${firstLetter}${el[el.length-1]}${el.slice(2, el.length-1)}`
        }
        
    }).join(' ')
    return newText
}

console.log(encryptThis("A")) // 65
console.log(encryptThis("A wise old owl lived in an oak")) // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis("The more he saw the less he spoke")) // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"