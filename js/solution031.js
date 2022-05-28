// The following was a question that I received during a technical interview for an entry level software developer position. I thought I'd post it here so that everyone could give it a go:

// You are given an unsorted array containing all the integers from 0 to 100 inclusively. However, one number is missing. Write a function to find and return this number. What are the time and space complexities of your solution?

// PREP

// passed a number, no special chars or strings

// return the missing number

function missingNo(nums) {
    let newNums = nums.sort( (a,b) => a-b)
    let newA = []
    
    for(let i=0; i< nums.length; i++){
      newA.push(nums[i])
    }
    // since you have a new array with a missing number and arrays start at 0, we need to move up an index. We run a check using indexOf to see if the value in newNums doesn't exist in newA and return the index + 1 since that is what the value is. The question asks for 1 to 100 but we're counting from 0 to 99 which is why it is i+1
    for(let i =0; i<newA.length; i++){
      if( newNums.indexOf(i+1) === -1){
        return i+1
      }
    }
    return 0
  }