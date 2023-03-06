const merge = function (array1, array2) {
  let finalArray = array1;
  for (var item of array2){
    for (var i = 0; i < finalArray.length; i++) {
      if (item <= finalArray[i]) {
        finalArray.splice(i, 0, item);
        break;
      } 
    }
    if (item > finalArray[finalArray.length - 1] || finalArray == 0) {
      finalArray.push(item);
    }
  }
  return finalArray;
}

//testing
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([],[1,2,3]), "=?", [ 1, 2, 3 ])