let inputArray = [60, 40, 55, 75, 64];

function alternatingSums (a) {
  let newArray = [];
  let w1 = 0;
  let w2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
      w1 += a[i];
    } else if (i % 2 != 0) {
      w2 += a[i];
    }
  }
  return (newArray = [w1, w2]);
}
alert (alternatingSums (inputArray));
