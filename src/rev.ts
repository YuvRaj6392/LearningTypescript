// const x:number=1;
// console.log(x)

// const greeting=(name:string)=>{
//    console.log(`hello ${name}`)
// }

// greeting("Yuv Raj")

// const sumOfNumbers=(a:number,b:number)=>{
//  return a+b;
// }

// console.log(sumOfNumbers(5,10))

// const barking=()=>{
//  console.log("bhow bhow")
// }

// const test2=(fn:()=>void)=>{
// setTimeout(fn,5000)
// }

// test2(barking)


// type Emp={
//  name?:string,
//  age?:number
// }

// const hasLegalAge=(Emp:Emp)=>{
// if(Emp.age && Emp.age>18){
//  console.log('Has legal age!')
// }else{
//  console.log('Does not have legal age!')
// }
// }

// hasLegalAge({
//  age:45
// })


// type aged=string | number

// function test3(age:aged){
//  console.log(age)
// }

// test3(24)

// type manage={
//  name:string
// }

// type dep={
//  age:number
// }

// type tech=manage & dep

// const hark:tech={
//  name:"yuvraj",
//  age:35
// }

// console.log(hark)


// type nums=number[]

// const  checkArr=(arr:nums)=>{
// console.log(arr)
// }

// checkArr([1,2,3,4])

type User5={
 name:string,
 age:number
}

const filteredUser=(User5:User5[])=>{
 return User5.filter(x=>x.age>15)
}

console.log(filteredUser([
 {
  name:"yuvraj",
  age:35
 },{
  name:"yuvraj",
  age:2
 },{
  name:"yuvraj",
  age:19
 },{
  name:"yuvraj",
  age:14
 },
]))