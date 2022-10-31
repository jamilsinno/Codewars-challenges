function stairsIn20(s){
  //your code here
  return s.reduce( (pv, cv) => pv + cv.reduce( (pv, cv) => pv + cv, 0 ), 0 ) * 20
}