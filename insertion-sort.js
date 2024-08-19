function insertionSort([...data]) {
  for (let i = 1; i < data.length; i++) {
    let iVal = data[i];
    let j = i - 1;

    // console.log(`iVal : ${iVal}`);
    // console.log(`(i : ${i}) | (lsi : ${lsi}) | | Check Orders : `);

    while (j >= 0 && iVal < data[j]) {
      // console.log(`### j : ${j} ###`);
      // console.log(`data[${j}] : ${data[j]} | iVal(${i}) : ${iVal}`);
      data[j + 1] = data[j];
      j--;
    }
    // console.log('-------------------- FINAL j : ' + j);
    data[j + 1] = iVal;
  }

  // console.log(`\n~~~~~~~~~~ END ~~~~~~~~~~`);
  return data;
}

let data = [31, 30, 21, 4, 44, 27];
console.log(...data);
console.log(`====================================\n`);
console.log(insertionSort(data));
