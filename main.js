/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr){
  return arr.push('Colin' );
}

function addMeToEnd(arr){
  return arr.unshift('Colin' );
}

function changeLast(arr, value){
  return arr.splice(-1, 1; value)
}

function changeAllValuesTo(arr, value){
  for(i=0;i<arr.length;i++){
    arr[i] = value
  }
  return are
}




/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
