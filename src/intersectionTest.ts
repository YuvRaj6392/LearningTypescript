type Employee={
 name:string,
 startDate:Date
}

type Manager={
 name:String,
 department:string
}

type techLead=Employee | Manager

const t:techLead={
 name:"yuvraj",
 department:"mechanical",
 startDate:new Date()
}

console.log(t)