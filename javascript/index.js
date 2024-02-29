person = "rajju"
gretings = "hello"
console.log(gretings, person)

let course = "artificial intelligence"
var color = "yellow"
let size = "small"
const Price = 1000
console.log(course)
console.log(color);
console.log(size);
console.log(Price);



let topics = ["html", "css", "js"]
console.log(topics);


/*array (collection of multiple values)
syntax-let(variables)=[elements]*/


let ages = [20, 30, "twentysix"]
console.log(ages);
ages[2] = 30

console.log("2nd index:", ages[2]);

let fruits = ["app", "banana", "kiwi"]
console.log(fruits);
fruits[0] = "apple"
console.log("0th index:", fruits[0]);

let projectorcolor = "red"
let projectorbrand = "iphone"
let projectorprice = 100000
let projectorquality = "avrage"

let projector = {

    color: "red",
    brand: "iphone",
    price: 100000,
    qualty: "avg"


}

console.log("prev", projector.brand);
projector.brand = "samsung"
console.log("after", projector.brand);
console.log("website-prev", projector.website);
projector.website = "https..."
console.log("website-after", projector.website);



let brands = [
    {
        name: "apple",
        website: "https:apple.com"
    },
    {
        name: "samsung",
        website: "https:apple.com"

    },
]
console.log(brands);
brands[1]['website'] = "https/samsung.com";


/*let courses=["mern","marketing","python"]
console.log("before",course);
console.log("after",courses);*/

let detailedcourses = [
    {
        name: "mern",
        duration: 3,
    },

    {
        name: "marketing",
        duration: 2,
    },
    {
        name: "python",
        duration: 2.5,
    },


];

console.log(detailedcourses[1]);
detailedcourses[1].name = "digital-marketing";
console.log(detailedcourses
);

let colors = [
    {
        name: "red",
        hex_value: "#FF0000",
    },
    {
        name: "white",
        hex_value: "#FFFFFF",
    },

    {
        name: "green",
        hex_value: "#008000ghw",
    },
];
console.log(colors);
console.log(colors[2]);
colors[2].hex_value = "#008000";
console.log(colors);

let users = [{
    name: "binita",
    age: 20,
    address: {
        permanent: {
            district: "jhapa",
            ward: -2,
            province: 1,


        },
        temp: {

            district: "ktm",
            ward: 12,
            province: 3

        },
        number: {
            sim1: 9817377327,
            sim2: 9843546006,

        },



    }

}

];

console.log(users);
console.log(users[0].address.permanent.ward);
users[0].address.permanent.ward = 20;
console.log(users);
console.log(users[0].address.number);
users[0].address.number = 1234567891;
console.log(users);

let courseDetails = [
    {

        course: "MERN",
        nameofstudents: [{

            name: "rajita",
            rollno: 7,
        },
        {
            name: "prakash",
            rollno: 5,

        }],
        course: "python",
        nameofstudents: [{

            name: "sandip",
            rollno: 2,
        },
        {
            name: "mukta",
            rollno: 9,

        }],

    }];
console.log(courseDetails);
console.log(courseDetails[0].nameofstudents[0].name);

let Topics=[
    {
     
title :"variables",
status:"completed",

},
   {
    title:"array",
    status:"completed"
   } ,

   {
    title:"object",
    status:"completed",

   },

   {
      
    title:"function",
    status:"pending",
},

{
    title:"loop",
    status:"pending",
},
];
console.log(Topics);
console.log(Topics[0].title ,'is', Topics[0].status);
console.log(Topics[1].title,'is',Topics[1].status);
console.log(Topics[2].title ,'is',Topics[2].status);
console.log(Topics[3].title,'is',Topics[3].status);
console.log(Topics[4].title,'is',Topics[4].status);
  
let input1=2
let input2=3
let input3=input1+input2;
console.log(`${input1} + ${input2} = ${input1 + input2}`);


    function calculateDouble  (input){//input is known as parameter
        console.log(`double of ${input} is ${input*2}`);
    }
    calculateDouble(4);//4 is an argument
    calculateDouble(20);

    function calculateSum(input1,input2){
        console.log(`${input1} + ${input2} = ${input1 + input2}`);

    }
calculateSum(2,3);
calculateSum(10,10);
calculateSum(5,10);


function printTopicInfo(forIndex){
    
    console.log(`${Topics[forIndex].title} is ${Topics[forIndex].status}`);
      }

printTopicInfo(0);
printTopicInfo(1);
printTopicInfo(2);
printTopicInfo(3);
printTopicInfo(4);


function sum (input2,input3) {
    
    console.log(`${input2}+${input3}=${result}`);
}
sum(100,200);
sum(10,200);

function double(input){
    return input *2;
}
console.log("double of 2",double(2));

function double (input){
    return input *10;
}
 console.log("double of 10",double(10));


 function sum (input1,input2,input3){
    let result = input1+input2+input3
    return result;
 }

let result = sum(500,500,500);
console.log("output",result);


/**
 * @param 
 * 
 */












