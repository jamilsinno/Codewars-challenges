function arrayPlusArray(arr1, arr2) {
    return arr1.reduce( (cv,pv) => cv + pv, 0 ) + arr2.reduce( (cv,pv) => cv + pv, 0) ; //something went wrong
  }