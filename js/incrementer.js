function incrementer(nums) { 
  // code goes here
  if (nums.length === 0) return [];
  return nums.map((x,i) => (x + i + 1) % 10);
}