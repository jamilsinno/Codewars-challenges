// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// PREP

// passed 4 parameters. Must compare the coupon to the correct code and must compare the current date to the expiry date. Coupon can be filled with string, special characters and numbers

// return true or false based on whether the coupon works and is not expired.

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // make the dates recognizable by code
    let d1 = new Date(currentDate)
    let d2 = new Date(expirationDate)

    console.log(d1)
    console.log(d2)

  if(enteredCode !== correctCode && d1>=d2 || enteredCode !== correctCode || d1>d2){
      return false
  }else{
      return true
  }
}

//examples

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014')) //true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014')) //false
