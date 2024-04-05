type User2={
 username?:string,
 age?:number
}

function isOfAge(user:User2){
if(user.age && user.age>18){
 return true
}
return false
}

console.log(isOfAge({
 age:12
}))

//type cannot be used to implement classes
