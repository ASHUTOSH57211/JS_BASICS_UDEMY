class Person {
    age = 26

    get Location(){   //-------->this is called a property
        return 'India'
    }
    set finame(name){ //-------->this is called a property
        this.firstname = name
    }
    
    constructor(fname,Lname){
        this.firstname = fname
        this.lastname = Lname

    }
    name() {
        return this.firstname+" " + this.lastname
        
    }
}

let person1 = new Person('Ashu',"Prasd")
console.log(person1.name())
console.log(person1.age)
console.log(person1.Location)
person1.finame= "Rambo"
console.log(person1.name())
