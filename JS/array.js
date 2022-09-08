var cars = ["BMW","Lambo","Audi", 1,2,3,null,true];
console.log(cars);

//Access
console.log(cars[3]);
console.log(cars[0]);

//Replace
cars[3]="Mahindra";
console.log(cars);

//Adding
cars[8]="Maruti";
console.log(cars);

//Acess array length
console.log(cars.length);

//Methods
//1.pop
cars.pop();
console.log(cars);

//2.Push
cars.push("Mustang");
console.log(cars);

//3.Unshift
cars.unshift("TATA");
console.log(cars);

//4.Shift
cars.shift();
console.log(cars);

//console.log(cars)
console.log(cars);

cars.length=3;
console.log(cars);