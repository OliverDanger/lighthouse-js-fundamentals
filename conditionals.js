const raining = true;
const cold = false;

if (raining) {
  console.log('dont forget an umbrella!');
}

if (cold) {
  console.log('make sure you bring a scarf!');
}

console.log('now you\'re ready to go outside');


const whichSchool  = function (age) {
  if (age<13){
    return 'Elementary School';
  } else if (age<=18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}

