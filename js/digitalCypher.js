function encode(str,  n)
{
  const arr1 = str.split('').map(c => c.charCodeAt(0) - 96);
  const arr2 = n.toString().split('').map(c => +c);
  let ans = [];
  let j = 0;
  
  for (let i = 0; i < arr1.length; i++){
      if (j > arr2.length - 1) {
        j = 0;
      }  
    ans.push(arr1[i] + arr2[j]);
    j++;
  }
  return ans;
}
