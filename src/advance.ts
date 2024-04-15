// type Emp={
//  name:String,
//  age:number
// }

// function sumOfAge(user1:Emp,user2:Emp){
// return user1.age+user2.age
// }

// console.log(sumOfAge({
//  name:"yuvraj",
//  age:34
// },{
//  name:"naruto",
//  age:3
// }))



// interface Man{
//  username:String,
//  email:String,
//  age:number,
//  phonenumber:String
// }

// type manProfiles=Pick<Man,'username'|'email'>

// function displayManagers(user:manProfiles){
//   console.log(user.username)
//   console.log(user.email)
// }

// displayManagers({
// username:"yuvraj",
// email:"yuvraj@gmail.com"
// })



// interface User{
//  user:String,
//  e:String,
//  password:String,
//  age:number
// }

// type updateProps=Pick<User,'e'|'password'|'age'>

// type updatePropsPartial=Partial<updateProps>

// function updateUser(updateDetails:updatePropsPartial){

// }


// interface Config {
//  readonly endpoint: string;
//  readonly apiKey: string;
// }

// const config: Readonly<Config> = {
//  endpoint: 'https://api.example.com',
//  apiKey: 'abcdef123456',
// };

// interface Config{
//  readonly apiKey:string,
//  readonly secret:string
// }

// const config:Readonly<Config>={
//  apiKey:"sdfsdfsdf",
//  secret:"sdfsdfdsf" 
// }

// interface emp{
//  username:string,
//  age:number
// }

// const userMap=new Map<string,emp>()

// userMap.set('abx',{username:'yuvraj',age:34});

// console.log(userMap.get('abx'))