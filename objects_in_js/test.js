// singleton objects


// Object literals

const mySym = Symbol("key1")


const jsUser = {
    name : "Sushil",
    "fullname" : "Sushil Kamble",
    [mySym] : 'mykey1',
    age : 16,
    location:"Mumbai",
    email : 'sushil@google.com',
    isLoggedIn : false,
    lastLoginDays : ['Mon','Tue','Wed']
}

// you can access values of Object in two ways:-

// console.log(jsUser.name);
// console.log(jsUser['name']);
// console.log(jsUser['fullname']);
// console.log(jsUser[mySym]);


// Object.freeze(jsUser)
// jsUser.email = "Sushil@microsoft.com"
// console.log(jsUser['email']);
// console.log(jsUser);



jsUser.greeting = function(){
    console.log('Hello this JS User');
}

jsUser.eve_greet = function (){
    console.log(`Congrats🎉 ${this.name}, for achieving senior software enginner role🔥.`);
    
}


// console.log(jsUser.greeting);

// console.log(jsUser.greeting()); 

// console.log(jsUser.eve_greet());


// singleton objects:-

// const tinderUser = new Object() 
const tinderUser = {}  //non-singleton object

tinderUser.id ="111"
tinderUser.name = "Mike"
tinderUser.isLoggedIn= false


// console.log(tinderUser);


const regularUser = {
    email : "somewhere@gmail.com",
    fullname: {
        user_fullname : {
            fname : 'Sushil',
            lname : 'Kamble'
        }
    }
}

// console.log(regularUser.fullname.user_fullname.fname);

const obj1 = {1:'a', 2:'b'}
const obj2 = {3:'a', 4:'b'}
const obj4 = {5:'a', 6:'b'}

// const obj3 = { obj1 , obj2}

// const obj3 = Object.assign({}, obj1 , obj2, obj4)   

const obj3 = {...obj1, ...obj2, ...obj4}  //spread operator

// console.log(obj3);


const users = [
    {
        id:1,
        email:'wtf@gmail.com'
    },
    {
        id:2,
        email:'tbh@gmail.com'
    },
    {
        id:3,
        email:'wth@gmail.com'
    },
]

// u can access arrayofobjects :
// console.log(users[1].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// you can question if that value present in object or not?

// console.log(tinderUser.hasOwnProperty('id'));



// objects destructure:-

const course = {
    coursename : 'PythonGENAI',
    coursePrice : 1000,
    courseInstructor: 'Hitesh'
}

const {courseInstructor:tutor} = course;
console.log(tutor);

const {coursename: crsname} = course;
console.log(crsname);

{
    "name": "Sushil",
    "coursename": 'JavascriptbySushil',
    "price" : 'free',
}