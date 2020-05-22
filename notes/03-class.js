class Person {
    constructor(name){
        this.name = name;
    }
    say(){
        // console.log(this)
        console.log(this.name)
    }
    static create (name){
        // console.log(this)
        return new Person(name)
    }
}
// const p = new Person('roger');
// p.say()

// const roger = Person.create('roger')
// roger.say()

class Student extends Person {
    constructor(name, number) {
        super(name)
        this.number = number;
    }
    hello(){
        super.say()
        console.log(this.number)
    }
}
const s = new Student('roger', '25');
s.hello()