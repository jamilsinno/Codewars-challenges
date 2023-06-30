function calc(x){
  let total1 = x.split("").map(c => c.charCodeAt()).join("");
  let total2 = x.split("").map(c => c.charCodeAt()).join("").split("").map(c => c === "7" ? c = "1" : c);
  return total1.split("").map(c => +c).reduce((a,b) => a + b, 0) - total2.map(c => +c).reduce((a,b) => a + b, 0)
}