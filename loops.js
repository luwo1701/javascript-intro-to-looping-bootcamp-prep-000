function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i==1){
      array.unshift("I am 1 strange loop.")
    }
    else{
      array.unshift("I am ${i} strange loops.")
    }
  }
}
function whileLoop(n){
  while(n>0){
    
  }
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}
function doWhileLoop(arr){
  while(arr.length>0 && maybeTrue()){
    arr.pop()
  }
}