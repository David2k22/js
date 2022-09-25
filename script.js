//task1

let user1 = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
};

console.log(user1.studentstatus);

//task2

let masivi = ["bmw", "mercedes", "volkswagen", "audi", "fiat", "toyota"];

for (let x = 0; x < 6; x++) {
    console.log(masivi[x]);
}



let i=0;
while (i < masivi.length) {
    console.log(masivi[i]);
    i++;
}


//task3

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let item of numbers)

if (item > 5){
    console.log(item);
}

//task4

let soso = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}


if (soso.age > 18 && soso.studentstatus === "active"){
    console.log("hello");
}  else if (soso.name === "levan"){
    console.log("hello levani");
}  else if (soso.studentstatus === "active" || soso.age < 25){
    console.log("hello world");
}  else{console.log("error");}
    

//task5

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas' ];

console.log(array[0], array[1], array[5], array[6]);


//task6

 // let array = [[2, -3, 5, 10], [25, -24, -11, 100], [-6, -7, 10]]; {
    //     console.log(array [0] [0], array [0][2], array [0][3], array [1] [0], array [1] [3], array [2] [2]);
    // }
    

//task7

let array2 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10]; 
// for (item of array2) {
//        if (item % 2 == 1) {
//            console.log(item);
//        }
//  kenti

for (item of array) {
    if (item % 2 == 0) {
        console.log(item);
    }
    };
//     /2


// task8
let users = [
    { username: 'giorgi', status:'false'},
    { username: 'levani', status:'false'},
    { username: 'anna', status:'true'},
];
console.log(users[2].status);