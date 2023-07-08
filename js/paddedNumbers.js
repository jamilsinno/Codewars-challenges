function solution(value){
  let str = value.toString()
  while (str.length < 5){
    str = "0" + str;
  }
  return "Value is " + str;
}