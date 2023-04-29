function bouncingBall(h,  bounce,  window) {
  // your code here
  let count = 0;
  
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }
  
  while (h > window) {
    h = h * bounce;
    count++;
  }
  
  return count;
}