//1
// console.log(hello);
// var hello = 'world';
// After Hoisting by the interpreter
// var hello;
// console.log(hello); logs undefined

//2
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// After Hoisting by the interpreter
// console.log(needle); magnet

//3
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// After Hoisting by the interpreter
// console.log(brendan); 'super cool'

//4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// After Hoisting by the interpreter
// console.log(food); chicken
// console.log(food); gone

//5 
// menu();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//menu(); error
// console.log(food); undefined

//6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// After Hoisting
// console.log(genre); undefined
//console.log(genre); rock
//console.log(genre); r&b
//console.log(genre); disco

//7
// dojo = "sanjose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
// After Hoisting
// sanjose
// seattle
// burbank
// sanjose

//8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
// After Hoisting
// 