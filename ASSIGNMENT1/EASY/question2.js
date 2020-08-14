
function addup(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(addup(4));
console.log(addup(13));
console.log(addup(600));