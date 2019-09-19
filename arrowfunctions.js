//Simple arrow function with map
var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Berriliyum'
]

console.log(materials.map(material => material.length));

//Basic syntax is
//(param1, param2) => {statements} or (param1, param2) => expression

//MORE EXAMPLES(BASIC)
//AN empty arrow function returns undefined
let empty = () => {}

//Immediately invoked function expression
var Simple = a => (a>15) ? 15 : a;
console.log(Simple(16)); //15
console.log(Simple(10)); //10

//promises
Promise.then(a=> {
    //.....
})
.then(b =>{
    //....
})