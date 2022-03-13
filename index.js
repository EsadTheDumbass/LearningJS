console.log('Hello World!');
const intrestRate = 1;
//The First Javascript comment
//Cannot start with a number
//is case sensitive
//Cannot contain space or -
const name = 'Esad Kocaturk';
console.log(name, '; Intrest rate is' + ' '+  intrestRate);
const turkish = true;
let knowDutch = false;
let knowFrench = undefined;
let blackMatter = null;

let Esad = {
    name: 'Esad',
    Surname: 'Kocaturk',
    skills:  {
        basketball: true}
 }

console.log(Esad.Surname + Esad.name, Object.values(Esad), JSON.JSON);
console.log(Esad)

if (Esad.skills.basketball) {
    console.log('He knows how to play basketball! ')
}else {
    console.log('he doesnt know how to play basketball!')
}
let colors = ['red', 'blue'];
colors[2] = 'third item lol';
console.log(colors.length);
function greet(sentence, message){
    console.log('Classical Music!' + sentence + message)
}
function add(number_1, number_2) {
    return number_1 + number_2;
}
const result = add(3, 2);
console.log(result);
greet(' Hell yeah!', ' MURICA!');
let myStr = 'stromg';
myStr += '1';
console.log(myStr);
names = ["esad", 'essek', 'cinar'];
names[3] = 'essseakge';

console.log(names+ names.length);
var number = 1 +2;
function calculate(number, number1) {
   var result =  number + number1;
   console.log(result);
}
calculate(2, 5);