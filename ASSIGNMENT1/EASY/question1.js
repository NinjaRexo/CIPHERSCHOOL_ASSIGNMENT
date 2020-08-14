
function charCount(ch, string) {
  var count = 0;
  for (var place = 0; place < string.length; place++) {
    if (ch == string.charAt(place)) {
      count = count + 1;
    }
  }
  return count;
}
console.log(charCount("a", "edabit"));
console.log(charCount("c", "Chamber of secrets"));
console.log(charCount("b", "big fat bubble"));
