function add(x) {
  var arr = [];
  var arrayLength = arr.length;
  if (arr === undefined || arrayLength == 0) {
    arr.push(x);
  }else if(arrayLength > 1){
    arr.unshift(x);
  }
  console.log(arr);
};
add(9);