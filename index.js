console.log("This is test logging");

// =====rules of declaring js variables======
// cannot be reserve keywords(eg: let, if, null)
// should be meaningful(eg: name, address)
// cannot start with number(eg: 1name)
// cannot contain space or hyphen(eg: 'first name', 'first-name')
// are case sensitive, (eg:firstName != FirstName) BEST PRACTICES USE CAMEL CASE

// =====ways to initialize variables=====
let firstName, lastName;
let firstAddress = 'House No. 12', secondAddress;
let firstNumberPhone = '0129090123';
let secondNumberPhone = '0129090555';
// console.log(firstName, lastName, firstAddress, secondAddress, firstNumberPhone, secondNumberPhone);


// =====primitive types=====
// undefined
// null
// string
// number
// boolean
// bigint
// symbol
let primarySchool = undefined;
let secondarySchool = null;
let age = 202262622626627;
let ageDouble = BigInt(909090090909909);
// console.log(typeof age, typeof ageDouble);