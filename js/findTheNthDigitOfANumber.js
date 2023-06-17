const findDigit = function(num, nth){
  const arr = num.toString().split('');
  if (nth < 1) return -1;
  return (arr.length - nth < 0) || arr[arr.length - nth] === "-" ? 0 : +arr[arr.length - nth];
}