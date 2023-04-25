"use strict";
let user = [1, 'abc'];
user.push('22');
console.log(user);
var size;
(function (size) {
    size[size["Small"] = 1] = "Small";
    size[size["Medium"] = 2] = "Medium";
    size[size["Large"] = 3] = "Large";
})(size || (size = {}));
;
let mydv = size.Medium;
console.log(mydv);
function calculateTax(income, taxyear = 2022) {
    if (taxyear < 2022) {
        return income * 1.2;
    }
    return income * 2;
}
let employee = {
    id: 1,
    name: "ABC",
    retire: (date) => {
        console.log(date);
    }
};
let emp = {
    id: 1,
    name: 'my name is this',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log('we give string input ' + kgToLbs(10));
console.log('we give number input ' + kgToLbs('10kg'));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 100;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hello");
}
greet(null);
greet(undefined);
greet('arun');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=tsc_from_mosh.js.map