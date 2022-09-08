var obj={}; //empty object
console.log(obj);

var person ={
    name:"Deepti", //-> "name":"Deepti"
    Age:23,
    Phone:9546462900, //->"Phone":9546462900
    isMale:"False",
    "school name":"SJCHS"
}

console.log(person);

//dot notation
console.log(person.name);

//square bracket notation
console.log(person["school name"]);

//nesting of objects

var captainAmerica={
    firstname:"Steve",
    lastname:"Rogers",
    friends:["Bucky","Tony stark","Bruce Banner"],
    age:122,
    isAvenger:true,
    address: {
        state:"Manhattan",
        city:"New York",
        country:"USA"
    },
    sayHi: function(){
        console.log(`Hello my name is Captain ${captainAmerica.firstname}`);
    }
};

console.log(captainAmerica.friends);
console.log(captainAmerica.friends[1]);
console.log(captainAmerica["friends"][0]);
captainAmerica.sayHi();

//acessing nested objects
console.log(captainAmerica.address.city);

//looping over objects
//1)for-in loop
for(let key in captainAmerica) {
    console.log(key);
    console.log(captainAmerica[key]);
}

//deleting a key from an obj
delete captainAmerica.age;
console.log(captainAmerica);