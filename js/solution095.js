// Given a list and a number, create a new list that contains each number of list at most N times, without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

// PREP

// going to be passed two arguments, a list and a parameter. The list contains numbers. The second argument will be a number. If any element in the list repeats more than the second argument, drop every element that appears after the maximum amount of elements has been put into your answer.

// Return the new array that holds the elements which repeat less than the second argument. Keep the same order of elements in the array. 

function deleteNth(arr,n){
    // create an answer array to hold your elements.
    let ans = []
    
    arr.reduce( (obj, item) => {
        if(!obj[item]){
            obj[item]=1
        }
        if(obj[item] <= n){
            ans.push(item)
        }
        obj[item]++
        return obj
    }, {})
    return ans
}

// examples

console.log(deleteNth([20,37,20,21], 1)) // [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]