const orderedCount = function (text) {
  // Implement me!
  let hash = {}
  let letter = text.split('')
  let ans = []
  
  for (ind in letter){
    if(!hash[letter[ind]]){
      hash[letter[ind]] = 1
    } else {
      hash[letter[ind]] += 1
    }
    console.log(hash)
  }
  console.log(hash)
  for (key in hash) {
    ans.push([key, hash[key]])
  }
  return ans
}