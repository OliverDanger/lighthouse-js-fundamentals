const judgeVegetable = function (vegetables, metric) {
  const judgedArray = [];
  let winningStat = '';
  let winner = '';
  for (const vegetable of vegetables) {
    const judgedMetric = vegetable[metric];
    judgedArray.push(judgedMetric);
  }
  for (var i = 0; i < judgedArray.length; i++) {
    if (judgedArray[i] > winningStat) {
      winningStat = judgedArray[i]
      winner = i;
    }
  }
  const winningEntry = vegetables[winner];
  const winningName = winningEntry.submitter;
  return winningName;
}

//testing below

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric))