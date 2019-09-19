//used to copy the values from one or more source objects to target objects. It returns target object.
//properties in target object will be overwritten by properties in source object.
//object.assign() method copies only enumerable and own properties from source object to target object.
//In case of error if property is non-writable then type error is occured.

const source = { b: 4, c: 5 };
const target = { a: 1, b: 2 };

const returnedtarget = Object.assign(target, source);

console.log(target);

console.log(returnedtarget);

//cloning an object
var clone = {a : 1}
var copy = Object.assign({}, clone)
console.log(copy);

//Deep cloning
//For deep cloning we need to use other alternatives because object.assign copies only property values.
'use strict';
let obj1 = { a: 0 , b: { c: 0}};
let obj2 = Object.assign({}, obj1);
console.log(JSON.stringify(obj2)); // { a: 0, b: { c: 0}}
//If we dont use JSON.stringify here the output is {"a":0,"b":{"c":0}}
//console.log(obj1);

obj1.a = 1;
console.log(JSON.stringify(obj1));
console.log(JSON.stringify(obj2));

//Merging objects
var o1 = {a:1}
var o2 = {b:2}
var o3 = {c:3}
var copy = Object.assign(o1, o2, o3);
console.log(copy);
console.log(o1);
console.log(o2);

//Merging objects with same properties
var o1 = {a: 1, b: 1, c: 1}
var o2 = {b: 2, c: 2}
var o3 = {c: 3}
var copy = Object.assign({},o1,o2,o3);
console.log(copy);

//copying symbol typed properties
var o1 = {a: 1}
var o2 = {[Symbol('foo')]: 2};
var obj = Object.assign({}, o1, o2);
console.log(obj);
console.log(Object.getOwnPropertySymbols(obj));