//Simple example of map. let us consider we have an array of persons
var officers = [
    {id : 1, name :'Gayathri'},
    {id : 2, name: 'Nannapaneni'},
    {id : 3, name: 'Satya'},
    {id : 4, name: 'Teja'} 
]
var officersIds = officers.map(officer => officer.id)
console.log(officersIds);

//Map basically takes 2 arguments---a callback which runs for each value in the array and returns each new value 
//in resulting array.
//Resulting arrays will always be same length as original array.

//using sqrt
var numbers = [1, 4, 9]
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
})
console.log(roots);

//doubling numbers
var numbers = [1, 2, 3]
var doubles = numbers.map(function(num){
    return num * 2;
})
console.log(doubles);

//Mapping array have undefined
var numbers = [1,2,3]
var filterednumbers = numbers.map(function(num,index){
    if(index  < 2)
    return num
})
console.log(filterednumbers);