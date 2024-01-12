const flag = true

if(flag)
{
console.log("condition satisfied")
}
else{
console.log("condition not satisfied")
}
/*
if we add !flag is if condition then we are not re assigning the value but we are creating a expression.
The value of flag is still true
if(!true){
    console.log("TRue")
}
else{
    console.log(flag) ------------> in this case the value of flag is true but else block wil be executed
    console.log("false")
}
*/
// Find the greatest number between a,b and c 
let a = 1023
let b = 23
let c = 100

if(a > b && a>c){
    console.log("a is gretest")
}
else if(b>c){
    console.log("b is greatest")
}
else{
    console.log("c is greatest")
}
