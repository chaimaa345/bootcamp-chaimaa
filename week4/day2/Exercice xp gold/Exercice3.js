const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})

/*Explanation of map callback arguments
When you use array.map((element, index) => { ... }):

element (here num) is the value of the current element.

index (here i) is the position (index) of that element in the array, starting from 0
i will go from 0 to array length − 1, so:

For the first element (1), i = 0

For the second element (2), i = 1

For the third element (4), i = 2

For the fourth element (5), i = 3

For the fifth element (8), i = 4

 For the sixth element (9), i = 5 
 the output of this code 
 For each element:
num is the value
i is the index (starting from 0)
It prints console.log(num, i)
It shows an alert with the current num
It returns num * 2, which will be stored in newArray
newArray value: [2, 4, 8, 10, 16, 18] */
