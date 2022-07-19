type person = {
    title:string,
    status:boolean,
    id:number,

}

const ramesh: person = {
    title:"Ramesh", 
    status:true,
    id:1

}

type user ={
    first_name:string,
    last_name:string,
}

const PrintName = ({first_name, last_name}:user) => {
    return (`${first_name}_${last_name}`)
}

let user1: user ={
    first_name:"Manish",
    last_name:"kumar"
}
 
PrintName(user1)

 type Address = {
house_number: number,
street:string,
city:string,
state:string,
postalCode:number,
country:string,
 }

 let address1: Address ={
    house_number:1,
    street:"Srinagar",
    city:"Masaurhi",
    state:"Bihar",
    postalCode:804452,
    country: "India"
 }

 

 type PersonDetails = {
    Priefix:string,
    phone: number
    address:string,
    email:string,
    first_name:string,
    last_name:string,

 }
 

 let PersonDetails1: PersonDetails = {
    Priefix:"Rahul",
    phone:5245658655,
    address: "masaurhi",
    email:"a@gmail.com",
    first_name:"karan",
    last_name:"sharma"
 }