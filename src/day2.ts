// enum Direction{
//  up,
//  down,
//  left,
//  right
// }

// function doThis(keyPressed:Direction){
//  if(keyPressed==Direction.up){
//   console.log('up called')
//  }
// }
// doThis(Direction.up);
// doThis(Direction.down);


// function identity<T>(arg:T){
//  return arg
// }

// console.log(identity<string>("yuvraj").toUpperCase())
// console.log(identity<number>(123))


function getFirstElement<T>(arr:T[]){
 return arr[0]
}

console.log(getFirstElement<string>(["yuvraj","amit","ramit","sumit","nikhil"]))