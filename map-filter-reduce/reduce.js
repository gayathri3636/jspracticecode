//Like map reduce also runs callback for each element in the array
//used to reduce array to a single value
const array1 = [1, 2, 3, 4, 5]
const reducer = (accumulator, value) => accumulator + value

console.log(array1.reduce(reducer));//15

/*Reducer takes four arguments
1)Accumulator
2)current value
3)current index
source array ---Reducer function returned value is assigned to accumulator */
/*If initial value is provided then accumulator is equal to initial value and current value will be first element in array
If initial value not provided then accumulator will be first value and current value will be second value.
If array is empty and no inital value provided then type error occurs. */

var total = [0, 1, 2, 3, 4]
var reduces = (accumulator, value) => accumulator + value
console.log(total.reduce(reduces));//10 

//sum of values in object array
var inital = 0;
var sum = [{X : 1}, {X: 2}, {X: 3}].reduce((accumulator, currentvalue) => accumulator + currentvalue.X, inital);
console.log(sum);//6

//Flattened arrays
var flattened = [[0,1], [1,2], [2,4]].reduce((accumulator,value) => accumulator.concat(value), []);
console.log(flattened);