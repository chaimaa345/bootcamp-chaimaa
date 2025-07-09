[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return;
}); 
//We have an array: [1, 2, 3].

//We call .map() on it. map always returns a new array with the same length.

//For each element (num), we check if it's a number (which it is).

//If true, we return num * 2.

//If not, it would return undefined (but in this case it won't happen).


//1 → 1 * 2 = 2

//2 → 2 * 2 = 4

//3 → 3 * 2 = 6