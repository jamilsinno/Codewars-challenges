function incrementString (string) {
    // return incrementedString
    const newString = string.split('')
    console.log(newString)
    const numbers = '0123456789'.split('')
    let arrNumbers = []
    let count = 0
    
    if (!numbers.includes(newString[newString.length-1])) {
        newString.push('1')
        return newString.join('')
    }else{
       for (let i = newString.length ; i>0 ; i--) {
            if (numbers.includes(newString[i])) {
                arrNumbers.unshift(Number(newString[i]))
                newString.pop(newString[i])
                count++
            }
        }
        console.log(arrNumbers)
        console.log(newString.join(''))
        if(+arrNumbers[arrNumbers.length-1] !== 9){
            arrNumbers[arrNumbers.length-1] += 1
        }else if (+arrNumbers[arrNumbers.length-1] !== 9 && +arrNumbers[arrNumbers.length-2] !== 9) {
            arrNumbers[arrNumbers.length-1] += 1
            arrNumbers[arrNumbers.length-2] += 1
        } else if (+arrNumbers[arrNumbers.length-1] === 9 && +arrNumbers[arrNumbers.length-2] === 9 && arrNumbers.length > 2) {
            arrNumbers[arrNumbers.length-1] = 0
            arrNumbers[arrNumbers.length-2] = 0
            arrNumbers[arrNumbers.length-3] += 1
        } else {
            arrNumbers[arrNumbers.length-1] = 0
            arrNumbers[arrNumbers.length-2] = 0
            arrNumbers.unshift(1)
        }
        console.log(arrNumbers)
        let check = arrNumbers.join('').split('').length
        console.log(check)
        if (check > count) {
           arrNumbers.shift()
        }
        console.log(arrNumbers)
        return newString.join('') + arrNumbers.join('')
    }
}

// examples

// console.log(incrementString("foo")) // "foo1" 
// console.log(incrementString("foobar000")) // "foobar001" 
// console.log(incrementString("foobar001")) // "foobar002" 
// console.log(incrementString("foobar010")) // "foobar011" 
// console.log(incrementString("foobar019")) // "foobar020" 
// console.log(incrementString("foobar099")) // "foobar100" 
// console.log(incrementString("foobar99")) // "foobar100" 
console.log(incrementString("foobar00999")) // "foobar01000" 