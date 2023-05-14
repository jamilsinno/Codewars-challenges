function divCon(x){
  const str = x.filter( e => e !== +e).reduce((a,b) => +a + +b, 0);
  const int = x.filter( e => e === +e).reduce((a,b) => a + b, 0);
  
  return int - str
}