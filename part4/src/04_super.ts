// super代表的是当前类的父类，在子类的构造函数中必须调用父类的构造函数

class Car{
    name: string;
    constructor(name:string){
        this.name = name
    }
    sayHello(){
        console.log('🚗在biibi')
    }
}


class Audi extends Car {

    age :number;
    // 如果在子类中写了构造函数，在子类的构造函数中必须对父类进行调用
    constructor(name:string, age:number){
        super(name);  // 调用父类的构造函数
        this.age = age
    }
    sayHello(){
        // 在类的方法中，super表示当前类的父类
        // super.sayHello(); 
        console.log('dididi')
    }
}

const audi = new Audi('audi',12)

console.log(audi)
audi.sayHello()