Arrays.sort(arr); // Sort the array in ascending order
int ans = 0;
for (int i = 0; i < arr.length / 2; i++) {
  int temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}
for (int i = 0; i < arr.length - 1; ++i) {
  int temp = arr[i] - arr[i + 1]; // Calculate the difference between adjacent elements
  ans += temp;
}
return ans;