const fizzBuzz = (n) => {

  for(let i = 1; i <= n; i++){

    // if(i % 5 === 0 && i % 3 === 0){
    //   console.log('FizzBuzz')
    // }else if (i%5 === 0){
    //   console.log('Buzz')
    // }else if(i%3 === 0){
    //   console.log('Fizz')
    // }else{
    //   console.log(i)
    // }

    i % 5 === 0 && i % 3 === 0 ? console.log('FizzBuzz') :
    i % 3 === 0 ? console.log('Fizz') :
    i % 5 === 0 ? console.log('Buzz') :
    console.log(i)
  }
}

fizzBuzz(100) 