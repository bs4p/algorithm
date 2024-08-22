function linearSearch(search, [...data]) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] !== search) continue;
    return i;
  }
}

const data = [4, 0, 5, 2, 1];
const searchResult = linearSearch(5, data);
console.log(searchResult);
