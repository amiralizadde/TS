let count:number = 12;

let lastName:string = 'amir';

let isLogin:boolean = true;

let user:{id:number , name:string , lastName : string}={
    id:1,
    name:'amir',
    lastName:"Alizade"
}

console.log('user : ' , user);

let newUser:(string|number|boolean)[]=['amir' , 12 , false]
let person:(string|number)[][]=[
    [1 ,"amir"]
]

let newPerson:[number , string][]=[
    [1 , 'amir']
]

console.log('newPerson' , newPerson[0][1]);

function nameFunction(usetName:(string|number) ){
    //code
}

nameFunction(1)