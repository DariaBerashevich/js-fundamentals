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
//Inheritance patterns:
//Method 1: Constructor pattern
function BaseLogger(message){
this.message = message;
}
BaseLogger.prototype.log = function(message){
console.log(this.message);
}
function TableLogger(){
BaseLogger.call(this,[].concat(...arguments).join(' | '))
}
Object.setPrototypeOf(TableLogger.prototype,BaseLogger.prototype)
function TableTimeLogger(){
let date = new Date();
let fullDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
TableLogger.call(this,fullDate,...arguments);
}
Object.setPrototypeOf(TableTimeLogger.prototype,TableLogger.prototype)
//Method 2: ES2015 (ES6) Class definitions
class BaseLogger{
constructor(message){
this.message = message;
}
log(){
console.log(this.message);
}
}
class TableLogger extends BaseLogger{
constructor(){
super([].concat(...arguments).join(' | '));
}
}
class TableTimeLogger extends TableLogger{
constructor(){
let date = new Date();
super(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,...arguments)
}
}
//Method 3: Explicit prototype declaration, Object.create, method factory
let BaseLogger = {
create(message){
let baseLogger = Object.create(BaseLogger.prototype);
baseLogger.message = message;
return baseLogger;
},
prototype: {
log(){
console.log(this.message);
}
}
}
let TableLogger = {
create(){
let baseProto = Object.create(BaseLogger.create([].concat(...arguments).join(' | ')),TableLogger.prototype);
let tableLogger = Object.create(baseProto);
return tableLogger;
},
prototype:{}
}
let TableTimeLogger = {
create(){
let date = new Date();
let tableProto = Object.create(TableLogger.create(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,...arguments),TableTimeLogger.prototype);
let tableTimeLogger = Object.create(tableProto);
return tableTimeLogger;
},
prototype:{}
}
//Method 4: Object.create, top-level factory, prototype post-declaration
function BaseLogger(message){
let baseLogger = Object.create(BaseLogger.prototype);
baseLogger.message = message;
return baseLogger;
}
BaseLogger.prototype = {
log(){
console.log(this.message);
}
}
function TableLogger(){
let baseProto = Object.assign(BaseLogger([].concat(...arguments).join(' | ')),TableLogger.prototype);
let tableLogger = Object.create(baseProto);
return tableLogger;
}
function TableTimeLogger(){
let date = new Date();
let tableProto = Object.assign(TableLogger(`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,...arguments),TableTimeLogger.prototype);
let tableTimeLogger = Object.create(tableProto);
return tableTimeLogger;
}

