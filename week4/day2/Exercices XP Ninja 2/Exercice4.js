function reverseArray(arr) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    // Swap elements
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;

    start++;
    end--;
  }

  return arr;
}
console.log(reverseArray([1, 2, 3, 4, 5]));         // [5, 4, 3, 2, 1]
console.log(reverseArray([1, 2]));                 // [2, 1]
console.log(reverseArray([]));                    // []
console.log(reverseArray([1,2,3,4,5,6,7,8,9,10])); // [10,9,8,7,6,5,4,3,2,1]
