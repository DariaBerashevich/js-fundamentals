function isArray(obj){
return obj.__proto__ === Array.prototype;
}
function isBoolean(obj){
return obj.__proto__ === Boolean.prototype;
}
function isDate(obj){
return obj.__proto__ === Date.prototype;
}
function isNumber(obj){
return obj.__proto__ === Number.prototype;
}
function isString(obj){
return obj.__proto__ === String.prototype;
}
function isFunction(obj){
return obj.__proto__ === Function.prototype;
}
function isUndefined(obj){
return typeof(obj) === undefined;
}
function isNull(obj){
return obj === null;
}

function first(arr){ 
return arr.shift();
}
function last(arr){
return arr.pop();
}

function skip(arr,number){
let newArr = arr.filter((el,index) => index != number)
return newArr;
}
function take(arr,number){
let newArr = arr.filter((el,index) => index == number)
return newArr;
}
