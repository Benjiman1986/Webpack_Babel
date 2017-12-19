require("babel-polyfill");
require('./es6/import.js');
import {Fun} from "./es6/export";
let fun = new Fun();
fun.getName ='WANG';
let yie = fun.getName();
console.log(yie.next());
console.log(yie.next());