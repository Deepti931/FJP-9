function outer() {
    var a=7;
    function inner (){
        console.log(a);
    }
    inner();
}
outer();