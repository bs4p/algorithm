/**
 * Bubble Sort
 * @param {Array} data
 */
function bubbleSort([...data]) {
  for (let i = 0; i <= data.length - 2; i++) {
    for (let j = 0; j <= data.length - 2; j++) {
      // let left = data[j];
      // let right = data[j + 1];
      // const isSB = left <= right ? ['<', `[${left}, ${right}]`] : ['>', `[${right}, ${left}]`];
      // console.log(`${left} ${isSB[0]} ${right} --> ${isSB[1]}`);

      if (data[j + 1] < data[j]) {
        let leftTemp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = leftTemp;
      }
    }
  }

  return data;
}

/**
 * Bubble Sort
 * @param {Array} data
 */
function bubbleSort2([...data]) {
  console.log(data);
  for (let i = data.length - 1; i >= 1; i--) {
    for (let j = data.length - 1; j >= 1; j--) {
      let right = data[j];
      let left = data[j - 1];
      const comp = right == left ? '=' : right < left ? '<' : '>';
      let log = '';
      switch (comp) {
        case '<':
          log = `[${left},${right}] | ${right} ${comp} ${left} | [${right},${left}]`;
          break;
        case '=':
        case '>':
          log = `[${left},${right}] | ${left} <= ${right} | [${left},${right}]`;
          break;
      }
      console.log(log);

      if (data[j] < data[j - 1]) {
        let rightTemp = data[j];
        data[j] = data[j - 1];
        data[j - 1] = rightTemp;
      }
    }
    console.log('----------');
  }

  return data;
}

console.clear();
console.log('########## START ##########');
const data = [4, 5, 0, 2, 8, 3];
const sortedData = bubbleSort(data);
console.log(data);
console.log(sortedData);
