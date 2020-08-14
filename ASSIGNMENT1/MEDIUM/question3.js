function removeDups(array) {
    return array.filter((a, b) => array.indexOf(a) == b);
  }
  console.log(removeDups([1, 0, 1, 0]));
  console.log(removeDups(["The", "big", "cat"]));
  console.log(removeDups(["John", "Taylor", "John"]));