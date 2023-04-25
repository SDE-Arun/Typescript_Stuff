// tuple
let user: [number, string] = [1, 'abc'];
user.push('22')
console.log(user)
// enums
// There is a huge difference in code in js file while 
// we are defining the enum as const or without it
// const enum size{ Small = 1 , Medium ,Large};
enum size { Small = 1, Medium, Large };
// by default it will assign the value to initial variable
//  is 0, but we can explicitly assign to 1 or any other nubmer 
let mydv = size.Medium;
console.log(mydv);

// FUNCTIONS IN TYPESCRIPT
// we can also specify the return type, otherwise it will take ""any""
// we can make the paramer optional by using "?"
// function calculateTax(income:number,taxyear?:number):number{
//     if((taxyear || 2022)<2022){
function calculateTax(income: number, taxyear = 2022): number {
    if (taxyear < 2022) {
        return income * 1.2;
    }
    return income * 2;
}

// OBJECTS IN TYPESCRIPT
let employee: {
    // here we are entering the data we are storing 
    'id': number,
    // if we include "readonly" property then it will not update the id,otherwise it does
    // readonly 'id': number,
    'name': string
    // we can make the string optional, but this will come in bad practice
    // 'name'?:string
    retire: (date: Date) => void
} = {
    id: 1,
    name: "ABC",
    retire: (date: Date) => {
        console.log(date);
    }
};
// console.log(employee)

// TYPE ALIASES in TYPESCRIPT
// ###### This is same as creating object but
//  we need to initialise the above object for using it every time but we can use this just by assigning the value
type Employee = {
    readonly 'id':number,
    name:string,
    retire:(date:Date)=>void
}
let emp:Employee = {
    id:1,
    name:'my name is this',
    retire:(date:Date)=>{
        console.log(date);
    }
}

// FUNCTION WHEN WE OUR INPUT IS OF MORE THAN ONE TYPE
// we are calling it UNION TYPE
function kgToLbs (weight: string | number):number{
    // This technique called ""Narrowing"" 
    if (typeof weight === 'number')
        return weight*2.2
    else
        return parseInt(weight)*2.2

}
console.log('we give string input '+kgToLbs(10))
console.log('we give number input '+kgToLbs('10kg'))

// WE ARE CALLING IT INTERSECTION TYPE
// here our parameter follows both the datatypes
type Draggable = {
    drag:()=>void
};
type Resizable = {
    resize:()=>void
};
// here we are creating the object which follows property of each above object
type UIWidget = Draggable & Resizable ;

let textBox : UIWidget = {
    drag:()=>{},
    resize:()=>{},
}

// LITERAL TYPES 
// we are using the literal type to specify the range value of our variable
type Quantity = 50|100;
let quantity: Quantity = 100;

type Metric = 'cm'|'inch';

// NULLABLE TYPES 
// we can't define the parameter of our function as null, but we can do it after this
function greet(name:string | null | undefined){
    if(name)
        console.log(name.toUpperCase());
    else
        console.log("Hello");

}
greet(null)
greet(undefined)
greet('arun')

//  OPTIONAL CHAINING 
type Customer = {
    birthday :Date 
};
// here we specify the null type can be Customer's object,null,undefined
function getCustomer(id:number):Customer|null|undefined{
    return id ===0?null:{birthday:new Date()};
}
let customer = getCustomer(1);
// if (customer !==null && customer !==undefined)
// console.log(customer.birthday)
// we can write the above line as 
console.log(customer?.birthday);

// use of ?.
let log:any = null;
// This will first check for existence of value if exists then execute other don't 
log?.('a');