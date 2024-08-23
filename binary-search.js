function binarySearch(target, sortedData) {
  let data = sortedData;

  let low = 0;
  let high = data.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    console.log(`---------- low:${low} | high:${high} | mid:${mid} | data[${mid}]:${data[mid]} | target:${target}`);

    if (target == data[mid]) {
      return mid;
    } else if (target < data[mid]) {
      high = mid - 1;
      console.log(`high = ${mid - 1}`);
    } else {
      low = mid + 1;
      console.log(`low  = ${mid + 1}`);
    }
  }

  return -1;
}

const data = [2, 4, 7, 9, 13, 15, 17, 20];
const searchResult = binarySearch(20, data);
console.log(searchResult);
