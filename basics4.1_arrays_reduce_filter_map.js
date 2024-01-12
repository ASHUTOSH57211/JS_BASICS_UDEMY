/* demonstrate reduce, filter and map in arrays with a small example
 question 
    ->take an array with numbers , select even numbers out from it, multiply 3 to it and sum the result 
*/

// without using any functions only by using loops

var numbers = [10,11,12,13,14]
console.log(numbers)
var evenNumbers=[]
var multipliedArray = []
sum = 0
    // select even numbers , multiply 3 to it
    for(let i = 0; i< numbers.length;i++){
        if(numbers[i]%2==0){
            evenNumbers.push(numbers[i])
            multipliedArray.push(numbers[i]*3)
            sum = sum+numbers[i]*3

        }
        
    }
    console.log("Even numbers",evenNumbers)
    console.log("multiplied by 3",multipliedArray)
    console.log("sum is",sum)
    console.log("***************USING Function***************")
// using reduce , filter and map
    //1. using filter
    evenNumbers =  numbers.filter(num =>num%2==0)  // ------> returns an array
    console.log(evenNumbers)

    //2. using map multiply 3 to it 
    multipliedArray = evenNumbers.map(num =>num*3)
    console.log(multipliedArray)

    //3. using reduce to add sum
    sum = multipliedArray.reduce((res,num)=> res+num,0)
    console.log(sum)


    // chaining all three in a single line

    sum = numbers.filter(num=> num%2==0).map(num=>num*3).reduce((res,num)=>num+res,0)
    console.log(sum)