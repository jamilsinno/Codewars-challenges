const findAverage = function (nums) {
    // Code here
    return nums.reduce( (pv,cv) => pv + cv, 0 ) / nums.length
  }