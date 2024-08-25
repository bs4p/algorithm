console.clear();
console.log('@@@@@@@@@@');

function jumpSearch(target, data) {
  // let data = [2, 9, 13, 15, 53, 54, 80, 82, 91, 101];
  let n = data.length;

  const step = Math.floor(Math.sqrt(n));
  let nextStep = step;
  let prevStep = 0;

  console.log(`target : ${target}`);
  while (data[nextStep] < target) {
    console.log(
      `prevStep: ${prevStep} | nextStep: ${nextStep} | data[${prevStep}]: ${data[prevStep]} | data[${nextStep}]: ${data[nextStep]}`
    );

    prevStep = nextStep;
    nextStep += step;

    // console.log(
    //   `prevStep: ${prevStep} | nextStep: ${nextStep} | data[${prevStep}]: ${data[prevStep]} | data[${nextStep}]: ${data[nextStep]}`
    // );
    console.log(`~~~`);
  }

  console.log(`prevStep:${prevStep} , nextStep:${nextStep}`);

  while (data[prevStep] <= target) {
    if (data[prevStep] == target) return prevStep;
    prevStep++;
  }
  return -1;
}

const data = [2, 9, 13, 15, 53, 54, 80, 82, 91, 101];
const target = 91;
const index = jumpSearch(target, data);
console.log(`========== FINISH ==========`);
console.log(`| Target found at index : ${index}`);
