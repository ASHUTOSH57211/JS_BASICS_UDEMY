//javascript objects

let person = {
    firstname: 'Ashutosh',
    Lastname : 'Prasad'
}
console.log(person)
console.log(person.Lastname)
console.log(person['firstname'])
person.age = 23
console.log(typeof(person['age']))
console.log(person)
delete person.age
console.log(person)

// creating another object and adding a function to it

let person2 = {
    name:'Ashu',
    last: 'PRasad',
    fullname : function(){
        console.log(this.name+this.last)
    }
}
console.log(person2.fullname())
