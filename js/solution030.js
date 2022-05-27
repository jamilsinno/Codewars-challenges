// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// PREP

// The parameter is number. Not going to be a string, special character or an array. Cannot be negative since they're buying items. 

// return 100 if the number is less than 5, 95 if it's less than 10, and 90 if its greater than 10. 

function saleHotdogs(n){
    // Use a ternary operator to return the proper dollar amount 
    return n < 5 ? (100 * n) : n < 10 ? (95 * n) : 90 * n
  }


// examples

console.log(saleHotdogs(3)) // 300
console.log(saleHotdogs(7)) // 6.65
console.log(saleHotdogs(30)) // 27.00


// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90