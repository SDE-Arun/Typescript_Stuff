// FILTER --> return a new array, can manipulate teh size of array (unlike map) returns based on condition.

const people = [
    {name: 'bob', age:20,position:'developer'},
    {name: 'peter', age:25,position:'designer'},
    {name: 'susy', age:30,position:'the boss'},
    {name: 'anna', age:35,position:'developer'}
];
// filter 
const youngpeople = people.filter((person)=>{
// if (person.age>20)
// console.log(person.name)
// or 
return person.age>20
})
// console.log(youngpeople)

const developers = people.filter((person)=>person.position==='developer');
// console.log(developers)

// FIND --> returns single instance (object), return first match, if no match - undefined
const peter = people.find((item)=>item.name==='peter');
// console.log(peter)

// We can also pass the array to work with find or filter
const fruits = ['mango','lemon','apple','orange'];
const fruit = fruits.find((itme)=>itme==='lemon')
// console.log(fruit)

/* The difference between ""find"" and ""filter"" is that we can not find
the other instance of our object using filter {we can, but it is not that much easy}
we can easily find the other instances using the ""find "" like 
*/

// Here peter ->> using filter , fruit ->> using find
console.log(peter?.age) // ? ->> because the o/p can be undefined 
console.log(developers[0].name) 