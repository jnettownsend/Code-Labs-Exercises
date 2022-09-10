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


// *****  Exercise 5: *****

