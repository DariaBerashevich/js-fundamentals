function logger(message){
console.log(message);
}
function tableLogger(){
let message = [].concat(...arguments).join(' | ');
return logger(message);
}
function tableTimeLogger(){
let date = new Date();
let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
return tableLogger(fullDate,...arguments);
}
