function linearSearch(target, [...data]) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== target) continue;
    return i;
  }
  return -1;
}

const data = [4, 0, 5, 2, 1];
const searchResult = linearSearch(9, data);
console.log(searchResult);
