// Exercise 1: 

function redundantReturn(str) {
    return function(name) {
      return `${name}! ${str}`;
    };
  }
  
  const userInfo = redundantReturn("My favorite color is blue.");
  
  console.log("My name is", userInfo("John"));


//   *****  Exericse 2:  ***** 


//   *****  Exercise 3:   ***** 

const drinks = [
    {name: "lemonade", price: 50 },
    {name: "lime", price: 10 },
    {name: "margarita", price: 12}
];

const drinksByPrice = drinks.sort((a, b) => a.price - b.price);
console.log(drinksByPrice);


// ***** Exercise 4:  ***** 

const users = [
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ];

const totalBudget = users.sum(users => users.budget);

console.log(getBudget);


// *****  Exercise 5: *****

