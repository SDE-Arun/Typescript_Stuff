/* REDUCE IN TYPESCRIPT
*** Reduce iterates and it is a callback function and 
it reduce to a single that can be ->> number,array,object
1st parameter ->> mostly('acc') - total of all calculations 
2nd parameter ->> mostly('curr') - current iteration /value
*/
const staff = [
    { name: 'bob', age: 20, position: 'developer', salary: 100 },
    { name: 'peter', age: 25, position: 'designer', salary: 300 },
    { name: 'susy', age: 30, position: 'the boss', salary: 400 },
    { name: 'anna', age: 35, position: 'intern', salary: 10 }
];

const dailyTotal = staff.reduce((acc, curr) => {
    // console.log(acc); // this give 0,100,400,800 ->> adding in each iteration
    // console.log(curr.salary); // 100,300,400,10
    acc += curr.salary
    return acc // If we don't return then it will give always error bcz we can't add initial with undefined 
}, 0) // here we also use number like "0" because we are returning a number
// we need to pass 0 above shows that our initial value is 0 
// if we pass 100 in place of ""0"" then it will add first value with initial like 
// },1000)
// ********************* we always need to return the total **************

// console.log(dailyTotal);


// // // // Reduce with objects 
const cart = [
    {
        title: 'Samsung Galaxy S7',
        price: 599.99,
        amount: 1,
    },
    {
        title: 'Google Pixel',
        price: 499.99,
        amount: 2,
    },
    {
        title: 'One Plus',
        price: 699.99,
        amount: 4,
    },
    {
        title: 'Apple i-phone',
        price: 799.99,
        amount: 3,
    },
]
let {totalitems,cartotal} = cart.reduce(
// let total = cart.reduce(
    (total, caritem) => {
        const { amount, price } = caritem // we are taking ''amount,price'' from ""caritem"" object
        // counting the items
        total.totalitems += amount
        // counting the total amount after purchasing 
        total.cartotal += amount * price
        return total // we must need to return our value 
    },
    // here we are returning a object in our reduce method,so we are using """reduce(()=>{},{})"""
    {
        totalitems: 0,
        cartotal: 0,
    }
)
// we can do like this, if we make our object like 
// {titalItems,carTotal} then it will also like 
console.log(totalitems,cartotal);
// both are same
// console.log(total);

// we can limit our o/p to particular digits 