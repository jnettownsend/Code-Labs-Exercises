
const foodList = document.querySelector('.food-list');

const food = [
    { item: 'Apples', price: 1.50 },
    { item: 'Bananas', price: 2.75},
    { item: 'Donuts', price: 4.50}
];

for (let i = 0; i < food.length; i++) {

    const foods = food[i];

    const foodData = document.createElement('div');
    foodData.innterText = food.item;
    foodList.appendChild(foodData);
}
