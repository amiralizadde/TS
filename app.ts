// const userName:string = 'amir';

// let isLogin:boolean = false

// let user:{id:number , name:string , age:number}={
//     id:1,
//     name:"amir",
//     age:28
// }

// let data:[string ,number]=['amir' ,1]

//learning const cast in dom 

// syntax1 : 

const userName = document.querySelector('.userName') as HTMLInputElement;

console.log(userName.value);

// syntax2

const buttonElement = <HTMLButtonElement>document.querySelector('.btn')

console.log(buttonElement.innerHTML);

//syntax 3

const buttonElement2 = document.querySelector('.btn')

console.log((buttonElement as HTMLButtonElement).innerHTML);


