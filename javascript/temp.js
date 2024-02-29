/*et blogs = [
  {
    title: "Basic Computer  Training in Nepal",
    created_at: "2024-03-22T15:14:31.944539+05:45hhhhh",
  },
  {
    title: ".Exploring Video Editing Opportunities",
    created_at: "2024-01-22T14:51:41.401510+05:45",
  },
  {
    title: "Mastering Adobe Illustrator at Mindrisers",
    created_at: "2024-02-22T14:49:45.524809+05:45",
  },
];

blogs[0].created_at.substring(0,10)
blogs[1].created_at.substring(0,10)
blogs[2].created_at.substring(0,10)
console.log(blogs);*/







// console.log(blogs);
//console.log(blogs[0].created_at);
// 

//conditional statement(if else)

let willrain=true

if(willrain){
  console.log("take umbrella");
}
else{
  console.log("no need to take umbrella");
}

let Willrain=false
let hasProbability=false
let verySunny=true
if (Willrain){
  console.log("take umbrella");
}
else if(hasProbability){
  console.log("you may take umbrella");

}
else if(verySunny){
  console.log("you may take umbrella");
}
else{
  console.log("no need to take umbrella");
}


let todos=[
  {
    title:"html",
    status:true

  },

  {
    title:"react",
    status:false
  },
  {
    title:"express",
    status:false
  }
]
if (todos[0].status){
  console.log("html is completed");
}
else{
  console.log("html is pending"); 
}
 
if (todos[1].status){
  console.log("react is completed");
}
else{
  console.log("react is pending");

}
if (todos[2].status){

}
else{
  console.log("express is pending");


function checkTodosstatus(todos){
  
 if(todos.status){
  console.log(`${todos.title} is completed` );
 }
else{
  console.log(`${todos.title}is pending` );
}
}
}

checkTodosstatus(todos[0]);
checkTodosstatus(todos[1]);
checkTodosstatus(todos[2]);

let students=[
  {
    name:"binita",
    hasPaid:false,
    hasScholarship:true,
  },
  {
    name:"rajita",
    hasPaid:false,
    hasScholarship:false,
  },
  {
    name:"prakash",
    hasPaid:true,
    hasScholarship:false,
  }

]

if (students[0].name.hasScholarship)
  {
  console.log(`${name}can give exam`);
}

 else {
  console.log(`${name}cannot give exam`);
}
 
 if (students[1].hasScholarship)
  {
  console.log(`${name}can give exam`);
}


 else {
  console.log(`${name}cannot give exam`);
}
 

 if (students[2].hasPaid)
 {
 console.log(`${name}can give exam`);
}


else {
 console.log(`${student.name}cannot give exam`);
}


function checkStudentexam(student){
  if(student.hasPaid){
    console.log(`${student.name}can give exam`);
  
  }
  else if(student.hasScholarship){
    console.log(`${student.name}can give exam`);
  }
  else{
    console.log(`${student.name}cannot give exam`);

    
  }
}
 checkStudentexam(students[0]);
 checkStudentexam(students[1]);
 checkStudentexam(students[2]);


 /*studentData.forEach(check=>{
 const name = check.name
 const hasPaid=check.hasPaid
 const hasScholarship=check.hasScholarship;


}*/


//logical operators

let user={
  username:"ram12",
  password:12334567,
  isActivated:false,

};

let inputpassword="12334567"
let inputusername="ram"


if(user.password == inputpassword){
(user.username== inputusername)
  console.log("can login");
}
else{
  console.log("cannot login");
}
 if(user.username==inputusername && user.password==inputpassword && user.isActivated){
  console.log("can login");
  

 }
 else{
  console.log("cannot login");
 }

 let  Students1=
  {
    name:"binita",
    hasPaid:true,
    hasScholarship:false,
    fullAttendance :true,

  };
 
if(Students1.hasPaid || Students1.hasScholarship && Students1.fullAttendance){
  console.log("can give exam");
}
else{
  console.log("cannot give exam");
}
/*loop
-for
-while
-do while*/

for(let count=1;count<=5;count++){
  console.log({count});
}
console.log("end of loop");

let Users=["ram","hari","shyam"];
 for(let index=0;index<3;index++){
  console.log(index);
  console.log(Users[index]);
 }

 let toodos=[
  {
    title:"html",
    status:true

  },

  {
    title:"react",
    status:false
  },
  {
    title:"express",
    status:false
  }
]

console.log(`${toodos[0].title} is ${todos[0].status}`);
console.log(`${toodos[1].title} is ${todos[1].status}`);
console.log(`${toodos[2].title} is ${todos[2].status}`);

for(index=0;index<3;index++){
  if(toodos[index].status){
    console.log(`${toodos[index].title} is completed`);
    }
  else{
    console.log(`${toodos[index].title} is pending`);
  }
}

const number = parseInt(prompt('Enter an integer: '));
for(let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(`${number} * ${i} = ${result}`);
}





















 console.log("end of loop");