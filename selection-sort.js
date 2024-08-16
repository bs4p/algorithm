function selectionSort([...data]) {
  for (let i = 0; i < data.length - 1; i++) {
    let iMin = i;

    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[iMin]) {
        iMin = j;
      }
    }
    if (iMin != i) {
      [data[i], data[iMin]] = [data[iMin], data[i]];
    }
  }

  return data;
}

let data = [8, 9, 14, 5, 10, 5, 7];
console.log(data);
console.log(selectionSort(data));
