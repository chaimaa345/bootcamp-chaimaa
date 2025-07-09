[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
); 
// Initial accumulator (acc): [1, 2]
// First iteration:
//cur = [0, 1]
//acc.concat(cur) = [1, 2].concat([0, 1]) = [1, 2, 0, 1]
//New acc: [1, 2, 0, 1]
//Second iteration:
//cur = [2, 3]
//acc.concat(cur) = [1, 2, 0, 1].concat([2, 3]) = [1, 2, 0, 1, 2, 3]
//New acc: [1, 2, 0, 1, 2, 3]
//output [1, 2, 0, 1, 2, 3]