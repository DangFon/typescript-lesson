
// 定义一个表示🐶的类

class Animal{
    name: string;
    age: number;
    constructor (name:string, age:number){
        this.name = name;
        this.age = age 
    };
    sayHello(){
        console.log('动物在叫～')
    }
}
/**
 *   Cat extends Animal 
 *   - 此时, Animal被称为父类，Dog被称为子类
 *   - 使用继承后，子类将会拥有父类所有的方法和属性
 *   - 通过继承可以将多个类中公用的代码写在一个父类中
 *      写一次即可拥有父类中的属性和方法
 *   - 如果父类和子类拥有相同的方法，则子类会覆盖掉父类 （方法重写）
 */

// 使 cat 继承Animal类 （扩展）
class Cat extends Animal{

    run(){
        console.log(`${this.name}在跑`)
    }

    sayHello(){
        console.log('喵喵喵')
    }
}

// 使 snake 继承 Animal类 
class snake extends Animal{
    
}


const cat = new Cat('miao', 12)
console.log(cat) 
cat.sayHello()
cat.run()