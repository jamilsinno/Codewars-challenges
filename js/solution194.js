function nearestSq(n){
    // your code
  let sqrt = Math.sqrt(n)
  
  let floor = Math.floor(sqrt)**2
  let ceil = Math.ceil(sqrt)**2
  
  let diffD = n - floor
  let diffU = ceil - n
  
  return diffD <= diffU ? floor : ceil
}