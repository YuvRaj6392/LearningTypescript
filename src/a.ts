//testing functions
function test(fn:()=>void){
 setTimeout(fn,5000)
}

function nolan(){
 console.log("hello world!")
}

test(nolan)







// function isLegal(age:number){
//  if(age>18){
//   return true
//  }
//  return false
// }

// if(isLegal(24)){
//  console.log('Legal to vote')
// }else{
//  console.log('Not Legal')
// }




// function sum(a:number,b:number):number{
//  return a+b;
// }
// const value=sum(1,4)
// console.log(value)



// function greet(firstName:string,lastName:string,age:number){
//  console.log(firstName+lastName+age)
// }

// greet("yuvraj","srivastava",24)