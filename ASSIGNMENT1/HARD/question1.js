
function realType(value) {
    let arr = Object.prototype.toString.call(value);
    let type = arr.split(" ");
    let typeStr = "";
  
    for (i = 0; i < type[1].length; i++) {
      if (type[1].charAt(i) !== "]") typeStr += type[1].charAt(i);
    }
  
    return typeStr.toLocaleLowerCase();
  }
  
  console.log(realType(1));
  console.log(realType("a"));
  console.log(realType(true));
  console.log(realType([]));
  console.log(realType(null));