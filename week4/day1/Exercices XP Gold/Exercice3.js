const curriedSum = (a) => (b) => a + b
curriedSum(30)(1) 
console.log(curriedSum(30)(1) );
//curriedSum(30)(1);
//This does the following:

//First: curriedSum(30) returns (b) => 30 + b

//Then: That function is called with 1, so:30 + 1 = 31