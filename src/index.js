class People {
    constructor(name){
        this.name = name
    }
    saySomething(){

    }
}

class A extends People {
    constructor(name){
        super(name)
    }
    saySomething(){
        alert('i am a')
    }
}

class B extends People {
    constructor(name){
        super(name)
    }
    saySomething(){
        alert('i am b')
    }
}

let a = new A('a')

let b = new B('b')
a.saySomething()
b.saySomething()