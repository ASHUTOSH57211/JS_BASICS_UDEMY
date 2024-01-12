//implement for loop, while loop and do while loop in js
/*factorial of a number
1. using for loop
2. using while loop 
3. using do while loop 
*/
let num = 5
let fact = 1
for(let i = 1;i <= num; i++ ){
    fact = fact*i
}
console.log(fact) 


 i = 1
 fact = 1
while(i <= num){
    fact = fact*i
    i++
}
console.log(fact)

i = 1
fact = 1

do{
    fact = fact*i;
    i++;
}
while(i <= num);


console.log(fact)