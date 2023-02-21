const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

const length = ingredients.length;
let start = 0;
while (start < length) {
  console.log(ingredients[start]);
  start++;
}

console.log ('-------------')
// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < length; i++){
  console.log(ingredients[i]);
}

console.log ('-------------')
// Write any loop (while or for) that prints out the contents of ingredients backwards:

for (var i = length - 1; i >= 0; i--) {
  console.log(ingredients[i]);
}