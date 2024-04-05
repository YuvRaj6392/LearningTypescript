type arrNum=number[]

const maxArray=(arr:arrNum)=>{
 console.log(arr)
}
maxArray([1,2,3])

function doSomething(cb2:(str:string,num:number)=>string){
 cb2("yuvraj",1)
 return "done"
}

function cb2(str: string, num: number):string {
 console.log("Callback function called with:", str, num);
 return "callback";
}

doSomething(cb2);
