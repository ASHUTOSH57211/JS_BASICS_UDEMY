/*declaring ana array multiple ways
1. var marks = Array(6)
2. var marks = new Array(10,20,30,40,50)
3. var marks = [10,20,30,40,50]------>common way
*/

var marks = [10,20,30,40,50]

//1. slicing an array and creating a sub array
subArray = marks.slice(2,5)
console.log(subArray)

//2. lenght of array, element at a specific index finding index of an element
console.log(marks.length)
console.log(marks[3])
console.log(marks.indexOf(40))

//3. modifying an array, adding at last, adding at beginning,removing from last
marks[2] = 60
marks.push(70)
console.log(marks)
marks.pop()
marks.unshift(80)  // appending element at 1st
console.log(marks)
marks.shift()    //removing the 1st element
console.log(marks)
