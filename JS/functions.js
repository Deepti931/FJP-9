function add(num1,num2) {
    var ans=num1+num2;
    console.log(ans);
}
add(3,4);

//4.Arrow function
function add(a,b){
    return a+b;
};

var add=(a,b) => {
    return a+b;
}

var ans= add(4,7);
console.log(ans);

var square= (num) =>num*num;
var ans= square(7);
console.log(ans);