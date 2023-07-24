function numberToPower(number, power){
  if (power === 0) return 1 ;
  let i = 1;
  const num = number;
  
  while (i < power) {
    number *= num;
    i++;
  }
  return number;
}