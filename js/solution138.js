function checkExam(array1, array2) {
    // good luck
     console.log(array1, array2)
     let result = 0
     for (let i = 0; i < array1.length; i++) {
       console.log(result)
       if (array1[i] === array2[i]) {
         result += 4
       } else if (array1[i] !== array2[i] && array2[i] !== "") {
         result -= 1
       }
     }
     return result < 0 ? 0 : result
   }