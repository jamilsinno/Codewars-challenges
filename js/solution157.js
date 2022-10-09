function minSum(arr) {
    // your code here
    let product = 0
    let newArr = arr.sort( (a,b) => a-b )
    console.log(newArr)
    
    for (let i = 0; i < arr.length/2; i ++) {
      product += arr[i]*arr[arr.length - 1 - i]
      console.log(product)
    }
    return product
  }