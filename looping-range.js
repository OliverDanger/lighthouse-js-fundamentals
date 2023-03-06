function range (start, end, step) {
  let returnedArray = [];
  if (step > 0 && end > start && (start || end || step) !== 'undefined') {
    while (start <= end) {
      returnedArray.push(start)
      start = start + step
    }
  } 
  return returnedArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(2,5,));