function testJackpot(arr) {
    if (
      arr[0] == arr[1] &&
      arr[1] == arr[2] &&
      arr[2] == arr[3] &&
      arr[3] == arr[0]
    ) {
      return true;
    } else {
      return false;
    }
  }
  console.log(testJackpot(["@", "@", "@", "@"]));
  console.log(testJackpot(["abc", "abc", "abc", "abc"]));
  console.log(testJackpot(["SS", "SS", "SS", "SS"]));
  console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));
  console.log(testJackpot(["SS", "SS", "SS", "Ss"]));