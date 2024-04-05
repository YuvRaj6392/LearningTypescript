interface User{
 username:string,
 age:number,
 email?:string
}

//email is an optional argument

function isLegal(user:User){
 if(user.age>18){
  return true
 }
 return false
}

console.log(isLegal({
 username:"yuvraj",
 age:24
}))