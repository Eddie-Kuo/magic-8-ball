// import functions and grab DOM elements
const breakfast = document.getElementById('breakfast');
const lunch = document.getElementById('lunch');
const dinner = document.getElementById('dinner');
const answer = document.getElementById('answer');

console.log(breakfast, lunch, dinner, answer);
// let state

const breakfastItems = ['Pancakes', 'Waffles', 'French Toast', 'Omelette', 'Skillet Hash'];

const lunchItems = ['Tacos', 'Burger', 'Pizza', 'Sandwich', 'Chicken Tenders'];

const dinnerItems = ['Steak', 'Pasta', 'Chinese Takeout', 'Ramen Noodles', 'Seafood'];

// set event listeners 

breakfast.addEventListener('click', () => {
    let thing = randomFoodItem(breakfastItems);
    answer.textContent = thing;
});

lunch.addEventListener('click', () => {
    let anotherThing = randomFoodItem(lunchItems);
    answer.textContent = anotherThing;
});

dinner.addEventListener('click', () => {
    let lastThing = randomFoodItem(dinnerItems);
    answer.textContent = lastThing;
});

function randomFoodItem(array) {
    const randomnumber = Math.floor(Math.random() * array.length);
    return array[randomnumber];
}
// blueprint for future arrays 

  // get user input



  // use user input to update state 
  // update DOM to reflect the new state
